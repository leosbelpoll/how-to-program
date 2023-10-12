import React, { useContext } from "react";
import { LanguageContext, SearchContext } from "./layout";
import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { slugify } from "../utils/string";
import { courses } from "../data/data";

export function ClassList({ classes }) {
  const { search = "" } = useContext(SearchContext);
  const { language } = useContext(LanguageContext);

  const router = useRouter();

  let {
    query: { courseSlug, id: pClassId },
  } = router;

  pClassId = Number(pClassId);

  const currentCourse = courses.find((course) => slugify(course.title[language]) === courseSlug);

  return (
    <>
      {classes
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
            showSubscription,
          }) => (
            <Link
              href={
                !showSubscription
                  ? `/courses/${slugify(
                      currentCourse.title[language]
                    )}/classes/${slugify(title[language])}`
                  : "#"
              }
            >
              <div
                className={classNames("main-class-list-item", {
                  active: classId === pClassId,
                })}
                data-bs-toggle={showSubscription ? "modal" : ""}
                data-bs-target="#subscriptionModal"
              >
                <i className="bi bi-file-earmark-play me-2"></i>
                {title[language]}
              </div>
            </Link>
          )
        )}
    </>
  );
}
