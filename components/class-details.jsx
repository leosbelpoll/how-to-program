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
import { normalizeStringLiteral } from "../utils/string";
import { courses } from "../data/data";

export function ClassDetails({
  isFullScreen,
  title,
  description,
  video,
  content,
  nextRecommendedClass,
}) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  let nextRecommendedCourse;

  if (nextRecommendedClass) {
    nextRecommendedCourse = courses.find(
      (course) => course.id === nextRecommendedClass.courseId
    );
  }

  return (
    <div className="class-details mb-3">
      {!isFullScreen && (
        <iframe
          className="rounded"
          width="100%"
          height="270px"
          src={video[LANGUAGE_SPANISH]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
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
            className={classNames("btn btn-light", {
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
            <a
              href={`/courses/${nextRecommendedClass.courseId}/classes/${nextRecommendedClass.id}`}
            >
              {nextRecommendedCourse.title[language]} -{" "}
              {nextRecommendedClass.title[language]}
            </a>
          </>
        )}
      </div>
    </div>
  );
}