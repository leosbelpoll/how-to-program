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
      <div className="px-4">
        <div className="row">
          <div className="col-3 position-relative">
            <MainMenu />
          </div>
          <div className="col-3 pt-4">
            <Search />
            <ClassList />
          </div>
          <div className="col-6 pt-4 vh-100 overflow-scroll">
            <ClassDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClassPage;
