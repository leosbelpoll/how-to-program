import Link from "next/link";
import React, { useContext } from "react";

import {
  DARK_THEME,
  ThemeContext,
  LANGUAGE_ENGLISH,
  LANGUAGE_SPANISH,
  LanguageContext,
  SearchContext,
  LIGHT_THEME,
} from "./layout";
import { getTranslation } from "../utils/i18n.utils";
import classNames from "classnames";
import { useRouter } from "next/router";

function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const { search, setSearch } = useContext(SearchContext);

  const router = useRouter();

  const flipLanguage = () => {
    if (language === LANGUAGE_SPANISH) {
      setLanguage(LANGUAGE_ENGLISH);
    } else {
      setLanguage(LANGUAGE_SPANISH);
    }
  };

  return (
    <nav
      className={classNames("navbar navbar-expand-lg bg-body-tertiary", {
        "bg-dark": theme === DARK_THEME,
      })}
      data-bs-theme={theme === DARK_THEME ? "dark" : ""}
    >
      <div className="container">
        <Link className="navbar-brand me-5" href="/">
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
              height={40}
            />
          )}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-item" href="/learning-paths">
              <li
                className={classNames("nav-link", {
                  "list-group-item-dark": theme === DARK_THEME,
                  active: router.pathname.startsWith("/learning-paths"),
                })}
              >
                <i className="bi bi-calendar2-minus-fill me-1"></i>
                {getTranslation("MENU_LEARNING_PATHS", language)}
              </li>
            </Link>
            <Link className="nav-item" href="/courses">
              <li
                className={classNames("nav-link", {
                  "list-group-item-dark": theme === DARK_THEME,
                  active: router.pathname.startsWith("/courses"),
                })}
              >
                <i className="bi bi-rocket-takeoff-fill me-1"></i>
                {getTranslation("MENU_COURSES", language)}
              </li>
            </Link>
            <a
              className="nav-item"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#feedbackModal"
            >
              <li
                className={classNames("nav-link", {
                  "list-group-item-dark": theme === DARK_THEME,
                })}
              >
                <i className="bi bi-chat-dots-fill me-1"></i>
                {getTranslation("MENU_FEEDBACK", language)}
              </li>
            </a>
          </ul>
          <form className="d-flex" role="search">
            <input
              type="text"
              className="form-control me-4"
              placeholder={getTranslation("SEARCH_FORM_PLACEHOLDER", language)}
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{width: "300px"}}
            />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {theme === LIGHT_THEME && (
                <a
                  className="nav-link"
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
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
