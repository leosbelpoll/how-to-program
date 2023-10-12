import React, { useContext } from "react";
import { useRouter } from "next/router";
import Search from "../../../../components/search";
import { LanguageContext } from "../../../../components/layout";
import { MainMenu } from "../../../../components/main-menu";
import { classes, courses } from "../../../../data/data";
import { HorizontalCard } from "../../../../components/horizontal-card";
import { slugify } from "../../../../utils/string";

function Classes() {
  const { language } = useContext(LanguageContext);

  const router = useRouter();

  const {
    query: { courseSlug },
  } = router;

  const currentCourse = courses.find(
    (course) => slugify(course.title[language]) === courseSlug
  );

  if (!currentCourse) return <h3>Invalid course slug: {courseSlug}</h3>;

  return (
    <div className="px-4">
      <div className="row">
        <div className="col-3 position-relative">
          <MainMenu />
        </div>
        <div className="col-4 pt-4">
          <Search />
          {classes
            .filter((clas) => clas.courseId === courseSlug)
            .map(({ title, description, thumbnail }) => (
              <div className="mb-4">
                <HorizontalCard
                  title={title}
                  description={description}
                  thumbnail={thumbnail || currentCourse.thumbnail}
                  link={`/courses/${courseSlug}/classes/${slugify(
                    title[language]
                  )}`}
                />
              </div>
            ))}
        </div>
        <div className="col-5 pt-5 mt-5 text-secondary">
          <div className="mt-5 text-center">
            <h4>Seleccione algúna clase</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
