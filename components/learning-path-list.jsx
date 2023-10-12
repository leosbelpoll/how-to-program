import React, { useContext } from "react";
import classNames from "classnames";

import { learningPaths } from "../data/data";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
} from "./layout";
import { HorizontalCard } from "./horizontal-card";
import { slugify } from "../utils/string";
import { useRouter } from "next/router";

function LearningPathList({ currentLearningPathId }) {
  const { search = "" } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const lowercaseSearch = search.toLowerCase();

  const router = useRouter();


  const {
    query: { learningPathSlug },
  } = router;

  const learningPath = learningPaths.find(
    (learningPath) => slugify(learningPath.title[language]) == learningPathSlug
  );

  if (learningPathSlug && !learningPath) return <h3>No learning path for slug: {learningPathSlug}</h3>;

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
            ({ id, title, description, thumbnail, showSubscription }) => (
              <div className="col mb-4" key={id}>
                <HorizontalCard
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  link={`/learning-paths/${slugify(title[language])}`}
                  active={learningPathSlug && learningPath.id === id}
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

export default LearningPathList;
