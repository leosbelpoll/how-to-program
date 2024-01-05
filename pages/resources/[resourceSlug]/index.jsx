import React from "react";
import Layout from "../../../components/layout";
import ResourceList from "../../../components/resource-list";
import { ResourceDetails } from "../../../components/resource-details";

function Resources() {
  return (
    <Layout>
      <div className="row">
        <div className="col-5 layout-column d-none d-md-block">
          <ResourceList/>
        </div>
        <div className="col-12 col-md-7 layout-column">
          <ResourceDetails />
        </div>
      </div>
    </Layout>
  );
}

export default Resources;
