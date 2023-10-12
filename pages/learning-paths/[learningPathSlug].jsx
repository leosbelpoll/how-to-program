import React, { useContext } from "react";
import { useRouter } from "next/router";
import { MainMenu } from "../../components/main-menu";
import Layout, { LanguageContext } from "../../components/layout";
import Search from "../../components/search";
import LearningPathList from "../../components/learning-path-list";
import { courses, learningPaths } from "../../data/data";
import { HorizontalCard } from "../../components/horizontal-card";
import { slugify } from "../../utils/string";

function LearningPath() {
  const router = useRouter();

  const { language } = useContext(LanguageContext);

  const {
    query: { learningPathSlug },
  } = router;

  const learningPath = learningPaths.find(
    (learningPath) => slugify(learningPath.title[language]) == learningPathSlug
  );

  if (!learningPath) return <h3>No learning path for id: {learningPathSlug}</h3>;

  const relatedCourses = courses.filter((course) =>
    learningPath.courses.includes(course.id)
  );

  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <div className="input-group mb-4">
              <Search />
              <LearningPathList currentLearningPathId={learningPathSlug} />
            </div>
          </div>
          <div className="col-5 pt-5 mt-5">
            {relatedCourses.map(({ id, title, description, thumbnail, showSubscription }) => (
              <div className="col mb-4" key={id}>
                <HorizontalCard
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  link={`/courses/${slugify(title[language])}`}
                  showSubscription={showSubscription}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LearningPath;
