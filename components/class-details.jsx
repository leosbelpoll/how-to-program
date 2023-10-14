import React, { useContext } from "react";
import {
  DARK_THEME,
  LANGUAGE_SPANISH,
  LanguageContext,
  ThemeContext,
} from "./layout";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { normalizeStringLiteral, slugify } from "../utils/string";
import { classes, courses } from "../data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Modal } from "./modal";
import { Iframe } from "./iframe";

function ClassDetailsInternal({
  isFullScreen,
  clas,
  nextRecommendedClass,
  nextRecommendedCourse,
}) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const { video, title, description, content } = clas;

  return (
    <div className="class-details mb-3">
      <div
        className="text-center mb-4"
        style={{ width: "100%", "aspect-ratio": "2 / 1.1" }}
      >
        <Iframe videoUrl={video[language]} />
      </div>

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
      <div className="mt-3">
        <p>{description[language]}</p>
      </div>
      <div className="mt-2">
        {content && (
          <ReactMarkdown
            children={normalizeStringLiteral(content[language])}
            remarkPlugins={[remarkGfm]}
          />
        )}
        {nextRecommendedClass && (
          <>
            <hr />
            <strong>Próxima clase recomendada:</strong>{" "}
            <Link
              href={`/courses/${slugify(
                nextRecommendedCourse.title[language]
              )}/classes/${slugify(nextRecommendedClass.title[language])}`}
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

  const { title } = currentClass;

  return (
    <>
      <ClassDetailsInternal
        clas={currentClass}
        nextRecommendedclassName={nextRecommendedClass}
        nextRecommendedCourse={nextRecommendedCourse}
      />
      <Modal title={title} id="fullScreenClassModal" fullscreen scrollable>
        <ClassDetailsInternal
          isFullScreen
          clas={currentClass}
          nextRecommendedclassName={nextRecommendedClass}
          nextRecommendedCourse={nextRecommendedCourse}
        />
      </Modal>
    </>
  );
}
