import React, { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";

import { courses } from "../data/courses";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
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
        <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
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
                  <img
                    src={`/images/courses/${thumbnail}-thumbnail.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="mb-4">
                      <h5 className="card-title">{title[language]}</h5>
                      <p className="card-text text-secondary">
                        <small>{description[language].slice(0, 100)}... </small>
                      </p>
                    </div>
                    <div className="d-grid">
                      <Link
                        href={`/courses/${id}`}
                        className="btn btn-primary"
                        type="button"
                      >
                        {getTranslation("READ_MORE", language)}
                      </Link>
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
