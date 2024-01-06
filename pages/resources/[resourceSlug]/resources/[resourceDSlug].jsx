import React, { useContext } from "react";
import { useRouter } from "next/router";
import Search from "../../../../components/search";
import Layout, { LanguageContext } from "../../../../components/layout";
import { MainMenu } from "../../../../components/main-menu";
import { classes, courses } from "../../../../data/data";
import { ClassList } from "../../../../components/class-list";
import { ClassDetails } from "../../../../components/class-details";
import { Modal } from "../../../../components/modal";

function ClassPage() {
  return (
    <Layout>
      <div className="row">
        <div className="col-4 layout-column d-none d-md-block">
          <ClassList />
        </div>
        <div className="col-12 col-md-8 layout-column">
          <ClassDetails />
        </div>
      </div>
    </Layout>
  );
}

export default ClassPage;
