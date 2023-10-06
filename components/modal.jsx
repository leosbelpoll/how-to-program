import React, { useContext } from "react";
import { DARK_THEME, LanguageContext, ThemeContext } from "./layout";
import classNames from "classnames";

export function Modal({ children, title }) {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classNames("modal fade", {
        "text-bg-dark": theme === DARK_THEME,
      })}
      id="fullScreenClassModal"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="fullScreenClassModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
        <div className="modal-content">
          <div
            className={classNames("modal-header", {
              "text-bg-dark": theme === DARK_THEME,
            })}
          >
            <h2>{title[language]}</h2>
            <button
              type="button"
              className={classNames("btn btn-light", {
                "btn-dark": theme === DARK_THEME,
              })}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div
            className={classNames("modal-body", {
              "text-bg-dark": theme === DARK_THEME,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
