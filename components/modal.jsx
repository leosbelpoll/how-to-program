import React, { useContext } from "react";
import { DARK_THEME, LanguageContext, ThemeContext } from "./layout";
import classNames from "classnames";

export function Modal({ children, title, id, scrollable, fullscreen }) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={classNames("modal fade")}
      id={id}
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div
        className={classNames("modal-dialog rounded", {
          "modal-fullscreen": fullscreen,
          "modal-dialog-scrollable": scrollable,
        })}
      >
        <div
          className={classNames("modal-content", {
            "text-bg-dark": theme === DARK_THEME,
          })}
        >
          <div
            className={classNames("modal-header", {
              "text-bg-dark": theme === DARK_THEME,
            })}
          >
            {fullscreen ? (
              <div className="container">
                <h4>{title[language]}</h4>
              </div>
            ) : (
              <>
                <h4>{title[language]}</h4>
              </>
            )}

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
            {fullscreen ? (
              <div className="container">{children}</div>
            ) : (
              <>{children}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
