import React from "react";
import Layout from "../../components/layout";
import ResourceList from "../../components/resource-list";
import Search from "../../components/search";
import { SelectConcept } from "../../components/SelectConcept";

function Resources() {
  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-md-5 layout-column">
          <div className="d-md-none mt-2">
            <Search />
          </div>
          <ResourceList />
        </div>
        <div className="col-7 text-center pt-5 layout-column d-none d-md-block">
          <SelectConcept text="Seleccione alguna categoría" />
        </div>
      </div>
    </Layout>
  );
}

export default Resources;
