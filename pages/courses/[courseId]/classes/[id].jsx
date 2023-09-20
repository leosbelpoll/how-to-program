import React, { useContext } from "react";
import { useRouter } from "next/router";

import courses from "../../../../data/courses.json";
import Layout, {
  DARK_THEME,
  LanguageContext,
  ThemeContext,
} from "../../../../components/layout";
import classNames from "classnames";
import Link from "next/link";

function CourseDetails() {
  const {
    query: {courseId, id},
  } = useRouter();

  const course = courses.find((course) => course.id == courseId);
  const clas = course?.classes?.find(clas => clas.id == id);

  if (!clas) {
    return <h1>Clase no encontrada</h1>;
  }

  const { title, video  } = clas;

  return (
    <Layout>
      <LanguageContext.Consumer>
        {({ language }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <div className="container mt-5 mb-5">
                <div className="row">
                  {/* <div className="col-6">
                    <img
                      src={`/images/courses/${thumbnail}-thumbnail.jpg`}
                      className="h-50"
                      alt="..."
                    />
                  </div> */}
                  <div className="col-12">
                    <h1 class="display-1">{title[language]}</h1>
                  </div>
                  <div className="col-6"  dangerouslySetInnerHTML={{__html: video[language]}}>
                  </div>
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </LanguageContext.Consumer>
    </Layout>
  );
}

export default CourseDetails;
