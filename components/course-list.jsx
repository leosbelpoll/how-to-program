import React, { useContext } from "react";
import classNames from "classnames";

import { courses } from "../data/data";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
} from "./layout";
import { HorizontalCard } from "./horizontal-card";
import { slugify } from "../utils/string";
import { useRouter } from "next/router";

function CourseList() {
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

  const router = useRouter();

  const {
    query: { courseSlug },
  } = router;

  return (
    <>
      {foundCourses.length ? (
        <div>
          {foundCourses.map(
            ({ id, title, description, thumbnail, showSubscription }) => (
              <div className="col mb-4" key={id}>
                <HorizontalCard
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  link={`/courses/${slugify(title[language])}`}
                  active={slugify(title[language]) === courseSlug}
                  showSubscription={showSubscription}
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
