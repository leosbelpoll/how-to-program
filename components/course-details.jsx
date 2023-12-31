import { useRouter } from "next/router";
import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { classes, courses } from "../data/data";
import { LanguageContext } from "./layout";
import Link from "next/link";
import { slugify, normalizeStringLiteral } from "../utils/string";
import { Iframe } from "./iframe";
import { CodeBlock } from "./code-block";
import { AutoScrollTop } from "./auto-scroll-top";
import { InProgressContent } from "./in-progress-content";
import Head from "next/head";
import { getVideoThumbnailFromEmbedUrl } from "../utils/youtube";

export function CourseDetails({ course }) {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const {
    query: { courseSlug },
  } = router;

  const currentCourse = courses.find(
    (course) => slugify(course.title[language]) === courseSlug
  );

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  const { id, video, title, content, tags, showSubscription } = currentCourse;

  if (showSubscription) {
    return (
      <InProgressContent
        interestedUrl={`/courses/${slugify(currentCourse.title[language])}`}
      />
    );
  }

  return (
    <>
      <Head>
        <title>Curso {title[language]} - Cómo programar?</title>
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
      <AutoScrollTop params={{ courseSlug }}>
        <div
          className="text-center mb-4"
          style={{ width: "100%", "aspect-ratio": "2 / 1.1" }}
        >
          <Iframe videoUrl={video[language]} />
        </div>

        <h2 className="mt-3">
          <strong>{title[language]} Curso</strong>
        </h2>
        <div className="categories">
          {tags.map((tag) => (
            <span className="badge text-bg-secondary">{tag}</span>
          ))}
        </div>

        <div className="course-details mt-4">
          <ReactMarkdown
            children={normalizeStringLiteral(content[language])}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{ code: CodeBlock }}
          />
        </div>

        <h4 className="mt-4">Clases:</h4>
        {classes
          .filter((clas) => clas.courseId === id)
          .map(
            ({ title, content, thumbnail, id: classId, showSubscription }) => (
              <Link
                href={
                  !showSubscription
                    ? `/courses/${slugify(
                        currentCourse.title[language]
                      )}/classes/${slugify(title[language])}`
                    : "#"
                }
                onClick={() =>
                  localStorage.setItem(
                    "linkToSubscribe",
                    `/courses/${slugify(
                      currentCourse.title[language]
                    )}/classes/${slugify(title[language])}`
                  )
                }
                className="mb-2 course-class-link d-block"
                data-bs-toggle={showSubscription ? "modal" : ""}
                data-bs-target="#subscriptionModal"
              >
                <i className="bi bi-file-earmark-play me-2"></i>
                {showSubscription && (
                  <span className="badge text-bg-primary">Pronto</span>
                )}{" "}
                {title[language]}
              </Link>
            )
          )}
      </AutoScrollTop>
    </>
  );
}
