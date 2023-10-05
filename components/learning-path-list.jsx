import React, { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";

import { courses, learningPaths } from "../data/data";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
  LANGUAGE_SPANISH,
} from "./layout";
import { getTranslation } from "../utils/i18n.utils";
import { HorizontalCard } from "./horizontal-card";

function LearningPathList({currentLearningPathId}) {
  const { search = "" } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const lowercaseSearch = search.toLowerCase();

  const foundLearningPaths = learningPaths.filter(
    ({ title, description, tags = [] }) =>
      title[language].toLowerCase().includes(lowercaseSearch) ||
      description[language].toLowerCase().includes(lowercaseSearch) ||
      tags.some((tag) => tag.toLowerCase().includes(lowercaseSearch))
  );

  return (
    <>
      {foundLearningPaths.length ? (
        <div>
          {foundLearningPaths.map(
            ({ id, title, description, thumbnail, background, textColor }) => (
              <div className="col mb-4" key={id}>
               <HorizontalCard thumbnail={thumbnail} title={title[language]} description={description[language]} link={`/learning-paths/${id}`} active={currentLearningPathId === id} />
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

export default LearningPathList;