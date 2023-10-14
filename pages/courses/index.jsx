import React from "react";
import Layout from "../../components/layout";
import { MainMenu } from "../../components/main-menu";
import CourseList from "../../components/course-list";
import Search from "../../components/search";
import { SelectConcept } from "../../components/SelectConcept";

function Courses() {
  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-md-5 layout-column">
          <div className="d-md-none mt-2">
            <Search />
          </div>
          <CourseList />
        </div>
        <div className="col-7 text-center pt-5 layout-column d-none d-md-block">
          <SelectConcept text="Seleccione algún curso" />
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
