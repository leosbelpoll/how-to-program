import React, { useContext } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import CourseList from "../../../components/course-list";
import Search from "../../../components/search";
import Layout, {
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

  const { video, title, description } = currentCourse;

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
              <div className="col-5 pt-5 mt-5 text-secondary">
                <div className="mt-5">
                  <iframe
                    className="rounded"
                    width="100%"
                    height="270px"
                    src={video[language]}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>

                  <h2 className="mt-3">
                    <strong>{title[language]} Curso</strong>
                  </h2>
                  <div className="categories">
                    <span className="badge text-bg-primary">Primary</span>
                    <span className="badge text-bg-info">Info</span>
                    <span className="badge text-bg-dark">Dark</span>
                  </div>

                  <p className="text-secondary mt-4">{description[language]}</p>

                  <h4 className="mt-4">Clases:</h4>
                  {classes
                    .filter((clas) => clas.courseId === id)
                    .map(({ title, description, thumbnail, id: classId }) => (
                      <div className="mb-4">
                        <HorizontalCard
                          title={title[language]}
                          description={""}
                          thumbnail={thumbnail || currentCourse.thumbnail}
                          link={`/courses/${id}/classes/${classId}`}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    </Layout>
  );
}

export default Courses;
