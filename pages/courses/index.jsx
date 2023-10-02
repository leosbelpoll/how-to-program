import React, { useContext } from "react";
import { classes, courses } from "../../data/data";
import Layout, {
  DARK_THEME,
  LanguageContext,
  ThemeContext,
} from "../../components/layout";
import { MainMenu } from "../../components/main-menu";
import classNames from "classnames";
import CourseList from "../../components/course-list";
import Search from "../../components/search";

function Courses() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Layout>
      <div className="px-4">
        <div className="row">
          <div className="col-3 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <Search />
            <CourseList />
          </div>
          <div className="col-5 pt-5 mt-5 text-center text-secondary">
            <div className="mt-5">
              <h4>Seleccione algún curso</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
