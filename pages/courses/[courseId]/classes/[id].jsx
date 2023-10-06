import React, { useContext } from "react";
import { useRouter } from "next/router";
import Search from "../../../../components/search";
import Layout, {
  DARK_THEME,
  LANGUAGE_SPANISH,
  LanguageContext,
  SearchContext,
  ThemeContext,
} from "../../../../components/layout";
import { MainMenu } from "../../../../components/main-menu";
import { classes, courses } from "../../../../data/data";
import { HorizontalCard } from "../../../../components/horizontal-card";
import ReactMarkdown from "react-markdown";
import { normalizeStringLiteral } from "../../../../utils/string";
import remarkGfm from "remark-gfm";
import classNames from "classnames";

function ClassDetails() {
  const router = useRouter();

  let {
    query: { courseId, id: pClassId },
  } = router;

  courseId = Number(courseId);
  pClassId = Number(pClassId);

  const currentCourse = courses.find((course) => course.id === courseId);

  if (!currentCourse) return <h3>Invalid course id: {courseId}</h3>;

  const foundClasses = classes.filter((clas) => clas.courseId === courseId);

  if (!foundClasses) return <h3>No classes for course: {courseId}</h3>;

  const currentClass = foundClasses.find((clas) => clas.id === pClassId);

  if (!currentClass) return <h3>No classe with id: {pClassId}</h3>;

  const { video, content, title } = currentClass;

  const classTemplate = ({ language, isFullScreen, theme }) => (
    <>
      {!isFullScreen && (
        <iframe
          className="rounded"
          width="100%"
          height="270px"
          src={video[LANGUAGE_SPANISH]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}

      {!isFullScreen && (
        <h2 className="mt-3">
          <strong>{title[language]}</strong>
        </h2>
      )}

      <div className="class-options">
        {!isFullScreen && (
          <button
            type="button"
            className={classNames("btn btn-light", {
              "btn-dark": theme === DARK_THEME,
            })}
            data-bs-toggle="modal"
            data-bs-target="#fullScreenClassModal"
          >
            <i className="bi bi-arrows-fullscreen"></i>
          </button>
        )}
      </div>
      <div className="mt-3">
        {content && (
          <ReactMarkdown
            children={normalizeStringLiteral(content[language])}
            remarkPlugins={[remarkGfm]}
          />
        )}
      </div>
    </>
  );

  return (
    <Layout>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <LanguageContext.Consumer>
            {({ language }) => (
              <SearchContext.Consumer>
                {({ search }) => (
                  <div className="px-4">
                    <div className="row">
                      <div className="col-3 position-relative">
                        <MainMenu />
                      </div>
                      <div className="col-4 pt-4">
                        <Search />
                        {foundClasses
                          .filter((clas) =>
                            clas.title[language]
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                          )
                          .map(
                            ({
                              title,
                              description,
                              thumbnail,
                              id: classId,
                              content,
                            }) => (
                              <div
                                className={classNames("main-class-list-item", {
                                  active: classId === pClassId,
                                })}
                              >
                                <i className="bi bi-file-earmark-play me-2"></i>
                                <a
                                  href={`/courses/${courseId}/classes/${classId}`}
                                >
                                  {title[language]}
                                </a>
                              </div>
                            )
                          )}
                      </div>
                      <div className="col-5 mt-4">
                        {classTemplate({ language, theme })}
                        <div
                          className={classNames("modal fade", {
                            "text-bg-dark": theme === DARK_THEME,
                          })}
                          id="fullScreenClassModal"
                          tabindex="-1"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          aria-labelledby="fullScreenClassModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
                            <div className="modal-content">
                              <div
                                className={classNames("modal-header", {
                                  "text-bg-dark": theme === DARK_THEME,
                                })}
                              >
                                <h2>{title[language]}</h2>
                                <button
                                  type="button"
                                  className={classNames("btn btn-light", {
                                    "btn-dark": theme === DARK_THEME,
                                  })}
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i className="bi bi-x-lg"></i>
                                </button>
                              </div>
                              <div
                                className={classNames("modal-body", {
                                  "text-bg-dark": theme === DARK_THEME,
                                })}
                              >
                                {classTemplate({
                                  language,
                                  isFullScreen: true,
                                  theme
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SearchContext.Consumer>
            )}
          </LanguageContext.Consumer>
        )}
      </ThemeContext.Consumer>
    </Layout>
  );
}

export default ClassDetails;
