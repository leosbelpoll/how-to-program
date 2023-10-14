import React from "react";
import { MainMenu } from "../../components/main-menu";
import Layout from "../../components/layout";
import Search from "../../components/search";
import LearningPathList from "../../components/learning-path-list";
import { HorizontalCard } from "../../components/horizontal-card";
import { slugify } from "../../utils/string";
import LearningPathCourses from "../../components/learning-path-courses";

function LearningPath() {
  return (
    <Layout>
      <div className="row">
        <div className="col-5 layout-column d-none d-md-block">
          <LearningPathList />
        </div>
        <div className="col-12 col-md-7 layout-column">
          <div className="d-md-none mt-2">
            <Search />
          </div>
          <LearningPathCourses />
        </div>
      </div>
    </Layout>
  );
}

export default LearningPath;
