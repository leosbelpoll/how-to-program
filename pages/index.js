import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Layout from "../components/layout";
import CourseList from "../components/course-list";
import Search from "../components/search";

export default function Home() {
  return (
    <Layout>
      <div className="container py-3">
        <Search />
      </div>
      <div className="container">
        <CourseList />
      </div>
    </Layout>
  );
}
