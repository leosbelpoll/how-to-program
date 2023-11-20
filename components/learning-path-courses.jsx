import React, { useContext } from "react";
import classNames from "classnames";

import { courses, learningPaths } from "../data/data";
import {
  DARK_THEME,
  ThemeContext,
  LanguageContext,
  SearchContext,
} from "./layout";
import { HorizontalCard } from "./horizontal-card";
import { slugify } from "../utils/string";
import { useRouter } from "next/router";
import { AutoScrollTop } from "./auto-scroll-top";
import { InProgressContent } from "./in-progress-content";

function LearningPathCourses({ currentLearningPathId }) {
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

  if (!learningPath)
    return <h3>No learning path for slug: {learningPathSlug}</h3>;

  const relatedCourses = courses.filter((course) =>
    learningPath.courses.includes(course.id)
  );

  const { showSubscription } = learningPath;

  if (showSubscription) {
    return (
      <InProgressContent
        interestedUrl={`/learning-paths/${slugify(
          learningPath.title[language]
        )}`}
      />
    );
  }

  return (
    <AutoScrollTop params={{ learningPathSlug }}>
      {relatedCourses.map(
        ({ id, title, content, thumbnail, showSubscription }) => (
          <div className="col mb-4" key={id}>
            <HorizontalCard
              thumbnail={thumbnail}
              title={title}
              content={content}
              link={`/courses/${slugify(title[language])}`}
              showSubscription={showSubscription}
            />
          </div>
        )
      )}
    </AutoScrollTop>
  );
}

export default LearningPathCourses;
