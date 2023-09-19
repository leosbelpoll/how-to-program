import { useState, createContext, useEffect } from "react";
import { useSearchParams } from 'next/navigation'

import Layout from "../components/layout";
import CourseList from "./course-list";
import Search from "../components/search";

export const SearchContext = createContext({
    search: "",
    setSearch: (search) => { }
});

export const LanguageContext = createContext({
    language: "",
    setLanguage: (language) => { }
});

export const LANGUAGE_SPANISH = 'es';
export const LANGUAGE_ENGLISH = 'en';

export default function Home() {
    const [search, setSearch] = useState("");
    const [language, setLanguage] = useState("hola");

    const searchParams = useSearchParams();
    const querySearch = searchParams.get('search');

    useEffect(() => {
        setSearch(querySearch || "");
        const initialLanguage = localStorage.getItem("language") ?? LANGUAGE_SPANISH;
        setLanguage(initialLanguage);
    }, [querySearch])

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            <LanguageContext.Provider value={{
                language, setLanguage: (language) => {
                    localStorage.setItem("language", language);
                    setLanguage(language);
                }
            }}>
                <Layout>
                    <div className="container py-3">
                        <Search />
                    </div>
                    <div className="container">
                        <CourseList />
                    </div>
                </Layout>
            </LanguageContext.Provider>
        </SearchContext.Provider>
    );
}
