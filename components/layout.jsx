import React, { createContext, useEffect, useState } from "react";
import classNames from "classnames";
import "bootstrap-icons/font/bootstrap-icons.css";

import Script from "next/script";
import Nav from "./nav";
import Footer from "./footer";

export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";

export const ThemeContext = createContext({
    theme: "",
});

function Layout({ children }) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        const initialTheme = localStorage.getItem("theme") ?? LIGHT_THEME;

        setTheme(initialTheme);
    }, []);


    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossOrigin="anonymous"
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
                        "text-bg-dark": theme === DARK_THEME,
                    })}
                >
                    <Nav />
                    <main>{children}</main>
                    <Footer />
                </div>
            </ThemeContext.Provider>
        </>
    );
}

export default Layout;
