import React from "react";
import CourseList from "../../../components/course-list";
import Search from "../../../components/search";
import Layout from "../../../components/layout";
import { MainMenu } from "../../../components/main-menu";
import { CourseDetails } from "../../../components/course-details";

function Courses() {
  return (
    <Layout>
      <div className="row">
        <div className="col-5 layout-column d-none d-md-block">
          <CourseList />
        </div>
        <div className="col-12 col-md-7 layout-column">
          <CourseDetails />
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
