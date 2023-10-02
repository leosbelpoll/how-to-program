import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Layout, {
  DARK_THEME,
  LANGUAGE_SPANISH,
  LanguageContext,
  ThemeContext,
} from "../components/layout";
import CourseList from "../components/course-list";
import Search from "../components/search";
import { courses } from "../data/courses";
import { MainMenu } from "../components/main-menu";
import classNames from "classnames";

export default function Home() {
  return (
    <Layout>
      <LanguageContext.Consumer>
        {({ language }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <div className="px-4">
                <div class="row">
                  <div class="col-3">
                    <MainMenu />
                  </div>
                  <div class="col-4 pt-4">
                    <div class="input-group mb-4">
                      <input
                        type="text"
                        className={classNames("form-control", {
                          "bg-dark text-white": theme === DARK_THEME,
                        })}
                        placeholder="Filtrar clase"
                        aria-label="Filtrar clase"
                        aria-describedby="button-addon2"
                      />
                      {/* <button class="btn btn-secondary" type="button" id="button-addon2">
              <i class="bi bi-search"></i>
            </button> */}
                    </div>

                    <CourseList />
                  </div>
                  <div class="col-5 pt-4">
                    <iframe
                      className="rounded"
                      width="100%"
                      height="270px"
                      src="https://www.youtube.com/embed/zJTjsLCKzio?si=c99Y8t-Qq14SAHjy"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>

                    {/* <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <i class="bi bi-star-fill rating-star"></i>
              <strong><span className="rating-points">5.0</span></strong>
              <small className="text-secondary">12 Reviews</small>
            </div>
          </div> */}

                    <h2 className="mt-3">
                      <strong>Curso de HTML - Colors</strong>
                    </h2>
                    <div className="categories">
                      <span class="badge text-bg-primary">Primary</span>
                      <span class="badge text-bg-info">Info</span>
                      <span class="badge text-bg-dark">Dark</span>
                    </div>

                    <p className="text-secondary mt-4">
                      {courses[0].description[LANGUAGE_SPANISH]}
                    </p>

                    <h4 className="mt-4">Próximos temas:</h4>

                    <ul class="list-group list-group-flush next-suggestions">
                      {courses[0].classes.map(({ title }) => (
                        <li class="list-group-item">
                          {title[LANGUAGE_SPANISH]}
                        </li>
                      ))}
                    </ul>
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
