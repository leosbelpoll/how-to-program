import React, { useContext } from "react";
import { useRouter } from "next/router";
import Search from "../../../../components/search";
import Layout, { LanguageContext } from "../../../../components/layout";
import { MainMenu } from "../../../../components/main-menu";
import { classes, courses } from "../../../../data/data";
import { ClassList } from "../../../../components/class-list";
import { ClassDetails } from "../../../../components/class-details";
import { Modal } from "../../../../components/modal";
import { slugify } from "../../../../utils/string";

function ClassPage() {
  const router = useRouter();

  const { language } = useContext(LanguageContext);

  let {
    query: { courseSlug, classSlug },
  } = router;

  const currentCourse = courses.find((course) => slugify(course.title[language]) === courseSlug);

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  const foundClasses = classes.filter((clas) => clas.courseId === currentCourse.id);

  if (!foundClasses) return <h3>No classes for course: {courseSlug}</h3>;

  const currentClass = foundClasses.find((clas) => slugify(clas.title[language]) === classSlug);

  if (!currentClass) return <h3>No classe with slug: {classSlug}</h3>;

  const { video, content, title, description } = currentClass;

  const nextRecommendedClass = foundClasses.find(
    (clas) => clas.id === classSlug + 1
  );

  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-3 pt-4">
            <Search />
            <ClassList classes={foundClasses} />
          </div>
          <div className="col-7 pt-4 vh-100 overflow-scroll">
            <ClassDetails
              content={content}
              title={title}
              video={video}
              description={description}
              nextRecommendedClass={nextRecommendedClass}
            />
            <Modal
              title={title}
              id="fullScreenClassModal"
              fullscreen
              scrollable
            >
              <ClassDetails
                content={content}
                title={title}
                description={description}
                video={video}
                isFullScreen
                nextRecommendedClass={nextRecommendedClass}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClassPage;
