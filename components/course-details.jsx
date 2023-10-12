import { useRouter } from "next/router";
import React, { useContext } from "react";
import { classes, courses } from "../data/data";
import { LANGUAGE_SPANISH, LanguageContext } from "./layout";
import Link from "next/link";
import { slugify } from "../utils/string";

export function CourseDetails({ course }) {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const { id, video, title, description, tags } = course;

  return (
    <>
      <iframe
        className="rounded"
        width={600}
        height={330}
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
        .map(
          ({
            title,
            description,
            thumbnail,
            id: classId,
            showSubscription,
          }) => (
            <div
              className="mb-2"
              data-bs-toggle={showSubscription ? "modal" : ""}
              data-bs-target="#subscriptionModal"
            >
              <i className="bi bi-file-earmark-play me-2"></i>
              <Link
                href={
                  !showSubscription ? `/courses/${slugify(course.title[language])}/classes/${slugify(title[language])}` : "#"
                }
              >
                {title[language]}
              </Link>
            </div>
          )
        )}
    </>
  );
}
