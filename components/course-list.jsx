import React, { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";

import { courses } from "../data/data";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
  LANGUAGE_SPANISH,
} from "./layout";
import { getTranslation } from "../utils/i18n.utils";
import { HorizontalCard } from "./horizontal-card";

function CourseList({ currentCourseId }) {
  const { search = "" } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const lowercaseSearch = search.toLowerCase();

  const foundCourses = courses.filter(
    ({ title, description, tags }) =>
      title[language].toLowerCase().includes(lowercaseSearch) ||
      description[language].toLowerCase().includes(lowercaseSearch) ||
      tags.some((tag) => tag.toLowerCase().includes(lowercaseSearch))
  );

  return (
    <>
      {foundCourses.length ? (
        <div>
          {foundCourses.map(
            ({ id, title, description, thumbnail, background, textColor }) => (
              <div className="col mb-4" key={id}>
                <HorizontalCard
                  thumbnail={thumbnail}
                  title={title[language]}
                  description={description[language]}
                  link={`/courses/${id}`}
                  active={id === currentCourseId}
                />
              </div>
            )
          )}
        </div>
      ) : (
        <div
          className={classNames("alert", {
            "alert-dark": theme === DARK_THEME,
          })}
          role="alert"
        >
          No se ha encontrado ningún curso para: <strong>{search}</strong>
        </div>
      )}
    </>
  );
}

export default CourseList;
