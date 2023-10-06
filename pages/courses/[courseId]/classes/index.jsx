import React, { useContext } from "react";
import { useRouter } from "next/router";
import Search from "../../../../components/search";
import Layout, {
  LanguageContext,
  ThemeContext,
} from "../../../../components/layout";
import { MainMenu } from "../../../../components/main-menu";
import { classes, courses } from "../../../../data/data";
import { HorizontalCard } from "../../../../components/horizontal-card";

function Classes() {
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
      <div className="px-4">
        <div className="row">
          <div className="col-3 position-relative">
            <MainMenu />
          </div>
          <div className="col-4 pt-4">
            <Search />
            {classes
              .filter((clas) => clas.courseId === id)
              .map(({ title, thumbnail, id: classId }) => (
                <div className="mb-4">
                  <HorizontalCard
                    title={title}
                    description={""}
                    thumbnail={thumbnail || currentCourse.thumbnail}
                    link={`/courses/${id}/classes/${classId}`}
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
    </Layout>
  );
}

export default Classes;
