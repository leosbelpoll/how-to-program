import React, { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import "bootstrap-icons/font/bootstrap-icons.css";

import Script from "next/script";
import Nav from "./nav";
import Footer from "./footer";
import { useSearchParams } from "next/navigation";
import { Subscription } from "./subscription";
import { Feedback } from "./feedback";

export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";

export const ThemeContext = createContext({
  theme: "",
});

export const LANGUAGE_SPANISH = "es";
export const LANGUAGE_ENGLISH = "en";

const defaultLanguage = LANGUAGE_SPANISH;

export const SearchContext = createContext({
  search: defaultLanguage,
  setSearch: (search) => {},
});

export const LanguageContext = createContext({
  language: "",
  setLanguage: (language) => {},
});

function Layout({ children }) {
  const [theme, setTheme] = useState("");
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState(defaultLanguage);

  const searchParams = useSearchParams();
  const querySearch = searchParams.get("search");

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  useEffect(() => {
    setSearch(querySearch || "");
    const storedLanguage = localStorage.getItem("language") ?? defaultLanguage;

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    const storedTheme = localStorage.getItem("theme");

    const systemTheme = systemPrefersDark ? DARK_THEME : LIGHT_THEME;

    const initialTheme = storedTheme ? storedTheme : systemTheme;

    setTheme(initialTheme);
  }, [querySearch, systemPrefersDark]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <SearchContext.Provider value={{ search, setSearch }}>
        <LanguageContext.Provider
          value={{
            language,
            setLanguage: (language) => {
              localStorage.setItem("language", language);
              setLanguage(language);
            },
          }}
        >
          <ThemeContext.Provider
            value={{
              theme,
              setTheme: (theme) => {
                localStorage.setItem("theme", theme);
                setTheme(theme);
              },
            }}
          >
            <div
              className={classNames({
                "text-bg-dark full-heigh": theme === DARK_THEME,
              })}
            >
              <Nav />
              <main>
                <div className="container">{children}</div>
              </main>

              {/* <Footer /> */}
            </div>
            <Subscription />
            <Feedback />
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </SearchContext.Provider>
    </>
  );
}

export default Layout;
