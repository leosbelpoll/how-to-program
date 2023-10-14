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
      <div className="px-4">
        <div className="row">
          <div className="col-3 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <div className="input-group mb-4">
              <Search />
              <LearningPathList />
            </div>
          </div>
          <div className="col-5 pt-5 mt-5">
            <LearningPathCourses />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LearningPath;
