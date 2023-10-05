import React, { useContext } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import CourseList from "../../../components/course-list";
import Search from "../../../components/search";
import Layout, {
  LANGUAGE_SPANISH,
  LanguageContext,
  ThemeContext,
} from "../../../components/layout";
import { MainMenu } from "../../../components/main-menu";
import { classes, courses } from "../../../data/data";
import { HorizontalCard } from "../../../components/horizontal-card";

function Courses() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  const {
    query: { courseId },
  } = router;

  const id = Number(courseId);

  const currentCourse = courses.find((course) => course.id === id);

  if (!currentCourse) return <h3>Invalid course id: {id}</h3>;

  const { video, title, description, tags } = currentCourse;

  return (
    <Layout>
      <LanguageContext.Consumer>
        {({ language }) => (
          <div className="px-4">
            <div className="row">
              <div className="col-3 position-relative">
                <MainMenu />
              </div>
              <div className="col-4 pt-4">
                <Search />
                <CourseList currentCourseId={id} />
              </div>
              <div className="col-5 mt-4 mb-3">
                <iframe
                  className="rounded"
                  width="100%"
                  height="270px"
                  src={video[LANGUAGE_SPANISH]}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <h2 className="mt-3">
                  <strong>{title[language]} Curso</strong>
                </h2>
                <div className="categories">
                  {tags.map(tag => (
                    <span className="badge text-bg-secondary">{tag}</span>
                  ))}
                </div>

                <p className="mt-4">{description[language]}</p>

                <h4 className="mt-4">Clases:</h4>
                {classes
                  .filter((clas) => clas.courseId === id)
                  .map(({ title, description, thumbnail, id: classId }) => (
                    <div className="mb-2">
                      <i class="bi bi-file-earmark-play me-2"></i>
                      <a href={`/courses/${id}/classes/${classId}`}>
                        {title[language]}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    </Layout>
  );
}

export default Courses;
