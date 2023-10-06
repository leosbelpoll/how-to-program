import { useRouter } from "next/router";
import React, { useContext } from "react";
import { classes, courses } from "../data/data";
import { LANGUAGE_SPANISH, LanguageContext } from "./layout";

export function CourseDetails({ course }) {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const {
    query: { courseId },
  } = router;

  const id = Number(courseId);

  const currentCourse = courses.find((course) => course.id === id);

  if (!currentCourse) return <h3>Invalid course id: {id}</h3>;

  const { video, title, description, tags } = course;

  return (
    <>
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
        {tags.map((tag) => (
          <span className="badge text-bg-secondary">{tag}</span>
        ))}
      </div>

      <p className="mt-4">{description[language]}</p>

      <h4 className="mt-4">Clases:</h4>
      {classes
        .filter((clas) => clas.courseId === id)
        .map(({ title, description, thumbnail, id: classId }) => (
          <div className="mb-2">
            <i className="bi bi-file-earmark-play me-2"></i>
            <a href={`/courses/${id}/classes/${classId}`}>{title[language]}</a>
          </div>
        ))}
    </>
  );
}
