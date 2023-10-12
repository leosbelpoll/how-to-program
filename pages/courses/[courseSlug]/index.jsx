import React, { useContext } from "react";
import { useRouter } from "next/router";
import CourseList from "../../../components/course-list";
import Search from "../../../components/search";
import Layout, { LanguageContext } from "../../../components/layout";
import { MainMenu } from "../../../components/main-menu";
import { courses } from "../../../data/data";
import { CourseDetails } from "../../../components/course-details";
import { slugify } from "../../../utils/string";

function Courses() {
  const router = useRouter();

  const { language } = useContext(LanguageContext);

  const {
    query: { courseSlug },
  } = router;

  const currentCourse = courses.find((course) => slugify(course.title[language]) === courseSlug);

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-3 pt-4">
            <Search />
            <CourseList currentCourseId={currentCourse.id} />
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
