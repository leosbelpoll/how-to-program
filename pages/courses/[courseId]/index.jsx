import React, { useContext } from "react";
import { useRouter } from "next/router";

import courses from "../../../data/courses.json";
import Layout, {
  DARK_THEME,
  LanguageContext,
  ThemeContext,
} from "../../../components/layout";
import classNames from "classnames";
import Link from "next/link";

function CourseDetails() {
  const {
    query: { courseId },
  } = useRouter();

  const course = courses.find((course) => course.id == courseId);

  if (!course) {
    return <h1>Curso no encontrado</h1>;
  }

  const { thumbnail, title, description, classes } = course;

  return (
    <Layout>
      <LanguageContext.Consumer>
        {({ language }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <div className="container mt-5 mb-5">
                <div className="row">
                  {/* <div className="col-md-6">
                    <img
                      src={`/images/courses/${thumbnail}-thumbnail.jpg`}
                      className="h-50"
                      alt="..."
                    />
                  </div> */}
                  <div className="col-md-12">
                    <h1 className="display-1">{title[language]}</h1>
                  </div>
                  <div className="col-md-6">
                    <p>{description[language]}</p>
                  </div>
                  <div className="col-md-6">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/zJTjsLCKzio?si=3nIfoX0-kad7mbL3"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    {classes && (
                      <ul className="list-group list-group-flush">
                        {classes.map((clas) => (
                          <li
                            className={classNames("list-group-item", {
                              "text-bg-dark": theme === DARK_THEME,
                            })}
                          >
                            <Link
                              href={`/courses/${course.id}/classes/${clas.id}`}
                              className={classNames({
                                "text-info": theme === DARK_THEME,
                              })}
                            >
                              {clas.title[language]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="col-md-6"></div>
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
