import React from "react";
import { useRouter } from "next/router";

import courses from "../../../../data/courses.json";
import Layout, {
  DARK_THEME,
  LANGUAGE_SPANISH,
  LanguageContext,
  ThemeContext,
} from "../../../../components/layout";
import Link from "next/link";
import { getTranslation } from "../../../../utils/i18n.utils";

function CourseDetails() {
  const {
    query: { courseId, id },
  } = useRouter();

  const course = courses.find((course) => course.id == courseId);
  const clas = course?.classes?.find((clas) => clas.id == id);

  if (!clas) {
    return <h1>Clase no encontrada</h1>;
  }

  const { title, video } = clas;
  const { title: courseTitle } = course;

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
                    <Link href={`/courses/${courseId}`}>
                      <h1 className="display-4">{courseTitle[language]}</h1>
                    </Link>
                  </div>
                  <div className="col-12">
                    <h1 className="display-6"><strong>{getTranslation('TOPIC', language)}:</strong> {title[language]}</h1>
                  </div>
                  {video && (
                    <div className="col-12">
                      <iframe
                        width="560"
                        height="315"
                        src={video[LANGUAGE_SPANISH]}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}
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
