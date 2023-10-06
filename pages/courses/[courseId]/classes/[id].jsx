import React from "react";
import { useRouter } from "next/router";
import Search from "../../../../components/search";
import Layout from "../../../../components/layout";
import { MainMenu } from "../../../../components/main-menu";
import { classes, courses } from "../../../../data/data";
import { ClassList } from "../../../../components/class-list";
import { ClassDetails } from "../../../../components/class-details";
import { Modal } from "../../../../components/modal";

function ClassPage() {
  const router = useRouter();

  let {
    query: { courseId, id: pClassId },
  } = router;

  courseId = Number(courseId);
  pClassId = Number(pClassId);

  const currentCourse = courses.find((course) => course.id === courseId);

  if (!currentCourse) return <h3>Invalid course id: {courseId}</h3>;

  const foundClasses = classes.filter((clas) => clas.courseId === courseId);

  if (!foundClasses) return <h3>No classes for course: {courseId}</h3>;

  const currentClass = foundClasses.find((clas) => clas.id === pClassId);

  if (!currentClass) return <h3>No classe with id: {pClassId}</h3>;

  const { video, content, title } = currentClass;

  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-3 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <Search />
            <ClassList classes={foundClasses} />
          </div>
          <div className="col-5 mt-4">
            <ClassDetails content={content} title={title} video={video} />
            <Modal title={title} id="fullScreenClassModal" fullscreen scrollable>
              <ClassDetails
                content={content}
                title={title}
                video={video}
                isFullScreen
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClassPage;
