import React, { useContext } from "react";
import { DARK_THEME, LanguageContext, SearchContext, ThemeContext } from "./layout";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { slugify } from "../utils/string";
import { classes, courses } from "../data/data";

export function ClassList() {
  const { search = "" } = useContext(SearchContext);
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  let {
    query: { courseSlug, classSlug },
  } = router;

  const currentCourse = courses.find(
    (course) => slugify(course.title[language]) === courseSlug
  );

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  const foundClasses = classes.filter(
    (clas) => clas.courseId === currentCourse.id
  );

  if (!foundClasses) return <h3>No classes for course: {courseSlug}</h3>;

  const currentClass = foundClasses.find(
    (clas) => slugify(clas.title[language]) === classSlug
  );

  if (!currentClass) return <h3>No classe with slug: {classSlug}</h3>;

  return (
    <>
      {foundClasses
        .filter((clas) =>
          clas.title[language]
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
        )
        .map(({ title, thumbnail, id: classId, content, showSubscription }) => (
          <Link
            href={
              !showSubscription
                ? `/courses/${slugify(
                    currentCourse.title[language]
                  )}/classes/${slugify(title[language])}`
                : "#"
            }
            onClick={() =>
              localStorage.setItem(
                "linkToSubscribe",
                `/courses/${slugify(
                  currentCourse.title[language]
                )}/classes/${slugify(title[language])}`
              )
            }
          >
            <div
              className={classNames("main-class-list-item", {
                "bg-dark": theme === DARK_THEME,
                active: slugify(title[language]) === classSlug,
              })}
              data-bs-toggle={showSubscription ? "modal" : ""}
              data-bs-target="#subscriptionModal"
            >
              <i className="bi bi-file-earmark-play me-2"></i>
              {showSubscription && (
                <span className="badge text-bg-primary">Pronto</span>
              )}{" "}
              {title[language]}
            </div>
          </Link>
        ))}
    </>
  );
}
