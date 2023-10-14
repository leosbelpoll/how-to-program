import React, { useContext } from "react";
import { MainMenu } from "../../components/main-menu";
import Layout from "../../components/layout";
import Search from "../../components/search";
import LearningPathList from "../../components/learning-path-list";
import { SelectConcept } from "../../components/SelectConcept";

function LearningPaths() {
  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-md-5 layout-column">
          <LearningPathList />
        </div>
        <div className="col-7 text-center pt-5 layout-column d-none d-md-block">
          <SelectConcept text="Seleccione ruta de aprendizaje" />
        </div>
      </div>
    </Layout>
  );
}

export default LearningPaths;
