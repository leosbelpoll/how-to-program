import React, { useContext } from "react";
import { useRouter } from "next/router";
import { MainMenu } from "../../components/main-menu";
import classNames from "classnames";
import Layout, {
  DARK_THEME,
  LanguageContext,
  ThemeContext,
} from "../../components/layout";
import Search from "../../components/search";
import LearningPathList from "../../components/learning-path-list";
import { courses, learningPaths } from "../../data/data";
import { HorizontalCard } from "../../components/horizontal-card";

function LearningPath() {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const {
    query: { id: learningPathId },
  } = router;

  const id = Number(learningPathId);

  const learningPath = learningPaths.find(
    (learningPath) => learningPath.id == id
  );

  if (!learningPath) return <h3>No learning path for id: {id}</h3>;

  const relatedCourses = courses.filter((course) =>
    learningPath.courses.includes(course.id)
  );

  return (
    <Layout>
      <LanguageContext.Consumer>
        {({ language }) => (
          <div className="px-4">
            <div className="row">
              <div className="col-3 position-relative">
                <MainMenu />
              </div>
              <div className="col-4 pt-4">
                <div className="input-group mb-4">
                  <Search />
                  <LearningPathList currentLearningPathId={id} />
                </div>
              </div>
              <div className="col-5 pt-5 mt-5 text-secondary">
                {relatedCourses.map(({ id, title, description, thumbnail }) => (
                  <div className="col mb-4" key={id}>
                    <HorizontalCard
                      thumbnail={thumbnail}
                      title={title[language]}
                      description={description[language]}
                      link={`/courses/${id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    </Layout>
  );
}

export default LearningPath;
