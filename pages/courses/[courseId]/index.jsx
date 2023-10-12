import React from "react";
import { useRouter } from "next/router";
import CourseList from "../../../components/course-list";
import Search from "../../../components/search";
import Layout from "../../../components/layout";
import { MainMenu } from "../../../components/main-menu";
import { courses } from "../../../data/data";
import { CourseDetails } from "../../../components/course-details";

function Courses() {
  const router = useRouter();

  const {
    query: { courseId },
  } = router;

  const id = Number(courseId);

  const currentCourse = courses.find((course) => course.id === id);

  if (!currentCourse) return <h3>Invalid course id: {id}</h3>;

  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-3 pt-4">
            <Search />
            <CourseList currentCourseId={id} />
          </div>
          <div className="col-7 pt-4 pb-3 vh-100 overflow-scroll">
            <CourseDetails course={currentCourse} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
