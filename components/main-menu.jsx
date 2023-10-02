import React, { useContext } from "react";
import {
  DARK_THEME,
  LANGUAGE_ENGLISH,
  LANGUAGE_SPANISH,
  LIGHT_THEME,
  LanguageContext,
  ThemeContext,
} from "./layout";
import classNames from "classnames";
import Link from "next/link";
import { getTranslation } from "../utils/i18n.utils";

export function MainMenu() {
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
    <ul className="list-group main-menu">
      <li
        className={classNames("list-group-item", {
          "list-group-item-dark": theme === DARK_THEME,
        })}
      >
        <Link className="navbar-brand d-none d-md-inline-block" href="/">
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
      <li
        className={classNames("list-group-item", {
          "list-group-item-dark": theme === DARK_THEME,
        })}
        aria-current="true"
      >
        <i class="bi bi-grid-1x2-fill me-3"></i> {getTranslation('MENU_HOME', language)}
      </li>
      <li class="list-group-item active">
        <i class="bi bi-calendar2-minus-fill me-3"></i> {getTranslation('MENU_LEARNING_PATHS', language)}
      </li>
      <li
        className={classNames("list-group-item", {
          "list-group-item-dark": theme === DARK_THEME,
        })}
      >
        <i class="bi bi-rocket-takeoff-fill me-3"></i> {getTranslation('MENU_CLASSES', language)}
      </li>
      <li
        className={classNames("list-group-item", {
          "list-group-item-dark": theme === DARK_THEME,
        })}
      >
        <i class="bi bi-file-earmark-text-fill me-3"></i> {getTranslation('MENU_RESOURCES', language)}
      </li>
      <li
        className={classNames("list-group-item", {
          "list-group-item-dark": theme === DARK_THEME,
        })}
      >
        <i class="bi bi-bookmarks-fill me-3"></i> {getTranslation('MENU_BOOKMARKERS', language)}
      </li>
      <li
        className={classNames("list-group-item mt-5", {
          "list-group-item-dark": theme === DARK_THEME,
        })}
      >
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
        <a className="nav-link ms-4" href="#" role="button" onClick={flipLanguage}>
          {language === LANGUAGE_ENGLISH ? "Es" : "En"}
        </a>
      </li>
    </ul>
  );
}
