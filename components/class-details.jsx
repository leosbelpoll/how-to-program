import React, { useContext } from "react";
import Head from "next/head";
import {
  DARK_THEME,
  LANGUAGE_SPANISH,
  LanguageContext,
  ThemeContext,
} from "./layout";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { normalizeStringLiteral, slugify } from "../utils/string";
import { classes, courses } from "../data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal } from "./modal";
import { Iframe } from "./iframe";
import { CodeBlock } from "./code-block";
import { AutoScrollTop } from "./auto-scroll-top";
import { InProgressContent } from "./in-progress-content";
import { getVideoThumbnailFromEmbedUrl } from "../utils/youtube";

function ClassDetailsInternal({
  isFullScreen,
  clas,
  course,
  nextRecommendedClass,
  nextRecommendedCourse,
}) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const { video, title, content, showSubscription } = clas;

  if (showSubscription) {
    return (
      <InProgressContent
        interestedUrl={`/courses/${slugify(
          course.title[language]
        )}/classes/${slugify(clas.title[language])}`}
      />
    );
  }

  return (
    <div className="class-details mb-3">
      {video && (
        <div
          className="text-center mb-4"
          style={{ width: "100%", "aspect-ratio": "2 / 1.1" }}
        >
          <Iframe videoUrl={video[language]} />
        </div>
      )}

      {!isFullScreen && (
        <h2 className="mt-3">
          <strong>{title[language]}</strong>
        </h2>
      )}

      <div className="class-options">
        {!isFullScreen && (
          <button
            type="button"
            className={classNames("btn btn-light d-none d-md-block", {
              "btn-dark": theme === DARK_THEME,
            })}
            data-bs-toggle="modal"
            data-bs-target="#fullScreenClassModal"
          >
            <i className="bi bi-arrows-fullscreen"></i>
          </button>
        )}
      </div>
      <div className="mt-2">
        {content && (
          <ReactMarkdown
            children={normalizeStringLiteral(content[language])}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{ code: CodeBlock }}
          />
        )}
        {nextRecommendedClass && (
          <>
            <hr />
            <strong>Próxima clase:</strong>{" "}
            <Link
              href={
                !nextRecommendedClass.showSubscription
                  ? `/courses/${slugify(
                      nextRecommendedCourse.title[language]
                    )}/classes/${slugify(nextRecommendedClass.title[language])}`
                  : "#"
              }
              onClick={() =>
                localStorage.setItem(
                  "linkToSubscribe",
                  `/courses/${slugify(
                    nextRecommendedCourse.title[language]
                  )}/classes/${slugify(nextRecommendedClass.title[language])}`
                )
              }
              data-bs-toggle={
                nextRecommendedClass.showSubscription ? "modal" : ""
              }
              data-bs-target="#subscriptionModal"
            >
              {nextRecommendedCourse.title[language]} -{" "}
              {nextRecommendedClass.title[language]}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export function ClassDetails() {
  const { language } = useContext(LanguageContext);

  const router = useRouter();

  let {
    query: { courseSlug, classSlug },
  } = router;

  const currentCourse = courses.find(
    (course) => slugify(course.title[language]) === courseSlug
  );

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  const foundClasses = classes.filter(
    (clas) => clas.courseId === currentCourse.id
  );

  if (!foundClasses) return <h3>No classes for course: {courseSlug}</h3>;

  const currentClass = foundClasses.find(
    (clas) => slugify(clas.title[language]) === classSlug
  );

  if (!currentClass) return <h3>No classe with slug: {classSlug}</h3>;

  const nextRecommendedClass = foundClasses.find(
    (clas) => clas.id === currentClass.id + 1
  );

  let nextRecommendedCourse;

  if (nextRecommendedClass) {
    nextRecommendedCourse = courses.find(
      (course) => course.id === nextRecommendedClass.courseId
    );
  }

  const { title, video } = currentClass;

  return (
    <>
      <Head>
        <title>
          {title[language]} - Curso {currentCourse.title[language]} - Cómo
          programar?
        </title>
        {video && (
          <>
            <meta
              property="og:image"
              content={getVideoThumbnailFromEmbedUrl(video[language])}
            />
            <meta
              property="og:image:secure_url"
              content={getVideoThumbnailFromEmbedUrl(video[language])}
            />
          </>
        )}
      </Head>
      <AutoScrollTop params={{ courseSlug, classSlug }}>
        <ClassDetailsInternal
          clas={currentClass}
          course={currentCourse}
          nextRecommendedClass={nextRecommendedClass}
          nextRecommendedCourse={nextRecommendedCourse}
        />
        <Modal title={title} id="fullScreenClassModal" fullscreen scrollable>
          <ClassDetailsInternal
            isFullScreen
            clas={currentClass}
            course={currentCourse}
            nextRecommendedClass={nextRecommendedClass}
            nextRecommendedCourse={nextRecommendedCourse}
          />
        </Modal>
      </AutoScrollTop>
    </>
  );
}
