import React from "react";
import Layout from "../../components/layout";
import { MainMenu } from "../../components/main-menu";
import CourseList from "../../components/course-list";
import Search from "../../components/search";

function Courses() {
  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <Search />
            <CourseList />
          </div>
          <div className="col-5 pt-5 mt-5 text-center text-secondary">
            <div className="pt-5">
              <h4>Seleccione algún curso</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
