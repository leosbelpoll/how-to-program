import React, { useContext } from "react";
import { LanguageContext, SearchContext } from "./layout";
import classNames from "classnames";
import { useRouter } from "next/router";

export function ClassList({ classes }) {
  const { search = "" } = useContext(SearchContext);
  const { language } = useContext(LanguageContext);

  const router = useRouter();

  let {
    query: { courseId, id: pClassId },
  } = router;

  courseId = Number(courseId);
  pClassId = Number(pClassId);

  return (
    <>
      {classes
        .filter((clas) =>
          clas.title[language]
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
        )
        .map(({ title, description, thumbnail, id: classId, content }) => (
          <div
            className={classNames("main-class-list-item", {
              active: classId === pClassId,
            })}
          >
            <i className="bi bi-file-earmark-play me-2"></i>
            <a href={`/courses/${courseId}/classes/${classId}`}>
              {title[language]}
            </a>
          </div>
        ))}
    </>
  );
}
