import React, { useContext } from "react";
import { MainMenu } from "../../components/main-menu";
import Layout from "../../components/layout";
import Search from "../../components/search";
import LearningPathList from "../../components/learning-path-list";

function LearningPaths() {
  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-2 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <div className="input-group mb-4">
              <Search />
              <LearningPathList />
            </div>
          </div>
          <div className="col-5 pt-5 mt-5 text-center text-secondary">
            <div className="mt-5">
              <h4>Seleccione alguna ruta</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LearningPaths;
