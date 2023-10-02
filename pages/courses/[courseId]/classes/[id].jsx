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
import ReactMarkdown from "react-markdown";
import { normalizeStringLiteral } from "../../../../utils/string";
import remarkGfm from "remark-gfm";

function ClassDetails() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const router = useRouter();

  let {
    query: { courseId, id: classId },
  } = router;

  courseId = Number(courseId);
  classId = Number(classId);

  const currentCourse = courses.find((course) => course.id === courseId);

  if (!currentCourse) return <h3>Invalid course id: {courseId}</h3>;

  const foundClasses = classes.filter((clas) => clas.courseId === courseId);

  if (!foundClasses) return <h3>No classes for course: {courseId}</h3>;

  const currentClass = foundClasses.find((clas) => clas.id === classId);

  if (!currentClass) return <h3>No classe with id: {classId}</h3>;

  const { video, content, title } = currentClass;

  return (
    <Layout>
      <LanguageContext.Consumer>
        {({ language }) => (
          <div className="px-4">
            <div className="row">
              <div className="col-3 position-relative">
                <MainMenu />
              </div>
              <div className="col-4 pt-4">
                <Search />
                {foundClasses.map(
                  ({ title, description, thumbnail, id: classId, content }) => (
                    <div className="mb-4">
                      <HorizontalCard
                        title={title[language]}
                        description={""}
                        thumbnail={thumbnail || currentCourse.thumbnail}
                        link={`/courses/${courseId}/classes/${classId}`}
                        active={classId === currentClass.id}
                      />
                    </div>
                  )
                )}
              </div>
              <div className="col-5 pt-5 mt-5">
                <iframe
                  className="rounded"
                  width="100%"
                  height="270px"
                  src={video[language]}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <h2 className="mt-3 mb-5">
                  <strong>{title[language]}</strong>
                </h2>
                {content && (
                  <ReactMarkdown
                    children={normalizeStringLiteral(content[language])}
                    remarkPlugins={[remarkGfm]}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </LanguageContext.Consumer>
    </Layout>
  );
}

export default ClassDetails;
