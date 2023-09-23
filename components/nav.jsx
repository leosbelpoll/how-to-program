import Link from "next/link";
import React, { useContext } from "react";

import {
  DARK_THEME,
  LIGHT_THEME,
  ThemeContext,
  LANGUAGE_ENGLISH,
  LANGUAGE_SPANISH,
  LanguageContext,
} from "./layout";
import { getTranslation } from "../utils/i18n.utils";

function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const flipLanguage = () => {
    if (language === LANGUAGE_SPANISH) {
      setLanguage(LANGUAGE_ENGLISH);
    } else {
      setLanguage(LANGUAGE_SPANISH);
    }
  };

  return (
    <nav
      className="navbar-transparent navbar navbar-expand-md pt-4"
      data-bs-theme={theme === DARK_THEME ? "dark" : "light"}
    >
      <div className="container">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand ms-2 d-md-none" href="/">
            {language === LANGUAGE_ENGLISH && (
              <img
                src={
                  theme === DARK_THEME
                    ? "/images/en-logo-dark.png"
                    : "/images/en-logo-light.png"
                }
                alt=""
                className="logo-inverse"
                height={50}
              />
            )}

            {language === LANGUAGE_SPANISH && (
              <img
                src={
                  theme === DARK_THEME
                    ? "/images/logo-dark.png"
                    : "/images/logo-light.png"
                }
                alt=""
                className="logo-inverse"
                height={50}
              />
            )}
          </Link>
          <div className="d-md-none float-end pt-1">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href="#"
                  role="button"
                  onClick={flipLanguage}
                >
                  {language === LANGUAGE_ENGLISH ? "Es" : "En"}
                </Link>
              </li>
              <li className="nav-item ms-3">
                {theme === LIGHT_THEME && (
                  <a
                    className="nav-link btn"
                    href="#"
                    role="button"
                    onClick={() => setTheme(DARK_THEME)}
                  >
                    <i className="bi bi-moon-stars-fill"></i>
                  </a>
                )}
                {theme === DARK_THEME && (
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    onClick={() => setTheme(LIGHT_THEME)}
                  >
                    <i className="bi bi-brightness-high-fill"></i>
                  </a>
                )}
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="navbar-brand d-none d-md-inline-block"
                  href="/"
                >
                  {language === LANGUAGE_ENGLISH && (
                    <img
                      src={
                        theme === DARK_THEME
                          ? "/images/en-logo-dark.png"
                          : "/images/en-logo-light.png"
                      }
                      alt=""
                      className="logo-inverse"
                      height={40}
                    />
                  )}

                  {language === LANGUAGE_SPANISH && (
                    <img
                      src={
                        theme === DARK_THEME
                          ? "/images/logo-dark.png"
                          : "/images/logo-light.png"
                      }
                      alt=""
                      className="logo-inverse"
                      height={40}
                    />
                  )}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {getTranslation("LEARNING_PATHS", language)}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/">
                      {getTranslation("LEARNING_PATHS.ALL", language)}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/?search=frontend">
                      FrontEnd
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/?search=backend">
                      BackEnd
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-none d-md-inline-block">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#"
                    role="button"
                    onClick={flipLanguage}
                  >
                    {language === LANGUAGE_ENGLISH ? "Es" : "En"}
                  </Link>
                </li>
                <li className="nav-item">
                  {theme === LIGHT_THEME && (
                    <a
                      className="nav-link btn"
                      href="#"
                      role="button"
                      onClick={() => setTheme(DARK_THEME)}
                    >
                      <i className="bi bi-moon-stars-fill"></i>
                    </a>
                  )}
                  {theme === DARK_THEME && (
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      onClick={() => setTheme(LIGHT_THEME)}
                    >
                      <i className="bi bi-brightness-high-fill"></i>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
