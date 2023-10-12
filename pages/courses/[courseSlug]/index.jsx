import React from "react";
import CourseList from "../../../components/course-list";
import Search from "../../../components/search";
import Layout from "../../../components/layout";
import { MainMenu } from "../../../components/main-menu";
import { CourseDetails } from "../../../components/course-details";

function Courses() {
  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-3 pt-4">
            <Search />
            <CourseList/>
          </div>
          <div className="col-7 pt-4 pb-3 vh-100 overflow-scroll">
            <CourseDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
