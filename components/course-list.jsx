import React, { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";

import { courses } from "../data/courses";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
  LANGUAGE_SPANISH,
} from "./layout";
import { getTranslation } from "../utils/i18n.utils";

function CourseList() {
  const { search } = useContext(SearchContext);
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
                <div
                  className={classNames("card h-100", {
                    "bg-dark": theme === DARK_THEME,
                    "border-light": theme === DARK_THEME,
                    "text-white": theme === DARK_THEME,
                  })}
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={`/images/courses/${thumbnail}-thumbnail.jpg`}
                        className="img-fluid rounded full-image"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <strong>
                          <p class="card-title">{title[language]}</p>
                        </strong>
                        <small class="card-text text-secondary">
                          {description[language].slice(0, 50)} ...
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
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
