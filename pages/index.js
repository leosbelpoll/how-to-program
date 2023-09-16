import { useState, createContext, useContext } from "react";

import Layout from "../components/layout";
import CourseList from "./course-list";
import Search from "../components/search";

export const SearchContext = createContext({
    search: "",
    setSearch: (search) => { }
});

export default function Home() {
    const [search, setSearch] = useState("");

    return (
        <Layout>
            <SearchContext.Provider value={{ search, setSearch }}>
                <div className="container py-3">
                    <Search />
                </div>
                <div className="container">
                    <CourseList />
                </div>
            </SearchContext.Provider>
        </Layout>
    );
}
