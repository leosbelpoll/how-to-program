import { useRouter } from "next/router";
import React, { useContext } from "react";
import { classes, courses } from "../data/data";
import { LANGUAGE_SPANISH, LanguageContext } from "./layout";
import Link from "next/link";
import { slugify } from "../utils/string";
import { Iframe } from "./iframe";

export function CourseDetails({ course }) {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const {
    query: { courseSlug },
  } = router;

  const currentCourse = courses.find(
    (course) => slugify(course.title[language]) === courseSlug
  );

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  const { id, video, title, description, tags } = currentCourse;

  return (
    <>
      <div className="text-center mb-4">
      <Iframe videoUrl={video[language]} />
      </div>

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
                {showSubscription && (
                  <span class="badge text-bg-primary">Pronto</span>
                )}{" "}
                {title[language]}
              </Link>
            </div>
          )
        )}
    </>
  );
}
