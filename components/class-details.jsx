import React, { useContext } from "react";
import { DARK_THEME, LANGUAGE_SPANISH, LanguageContext, ThemeContext } from "./layout";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { normalizeStringLiteral } from "../utils/string";

export function ClassDetails({ isFullScreen, title, video, content }) {
    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

  return (
    <>
      {!isFullScreen && (
        <iframe
          className="rounded"
          width="100%"
          height="270px"
          src={video[LANGUAGE_SPANISH]}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}

      {!isFullScreen && (
        <h2 className="mt-3">
          <strong>{title[language]}</strong>
        </h2>
      )}

      <div className="class-options">
        {!isFullScreen && (
          <button
            type="button"
            className={classNames("btn btn-light", {
              "btn-dark": theme === DARK_THEME,
            })}
            data-bs-toggle="modal"
            data-bs-target="#fullScreenClassModal"
          >
            <i className="bi bi-arrows-fullscreen"></i>
          </button>
        )}
      </div>
      <div className="mt-3">
        {content && (
          <ReactMarkdown
            children={normalizeStringLiteral(content[language])}
            remarkPlugins={[remarkGfm]}
          />
        )}
      </div>
    </>
  );
}
