import classNames from "classnames";
import React, { useContext } from "react";
import { DARK_THEME, LanguageContext, ThemeContext } from "./layout";
import Link from "next/link";

export function HorizontalCard({
  thumbnail,
  title,
  description,
  link,
  active,
  showSubscription,
}) {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      href={!showSubscription ? link : "#"}
      onClick={() => localStorage.setItem("linkToSubscribe", link)}
    >
      <div
        className={classNames("card h-100", {
          "bg-dark": theme === DARK_THEME,
          "border-light": theme === DARK_THEME,
          "text-white": theme === DARK_THEME,
          active: active,
        })}
        data-bs-toggle={showSubscription ? "modal" : ""}
        data-bs-target="#subscriptionModal"
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`/images/${thumbnail}-thumbnail.jpg`}
              className="img-fluid rounded full-image"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <strong>
                <p className="card-title">{title[language]}</p>
              </strong>
              <small className="card-text text-secondary">
                {description[language]?.slice(0, 50)} ...
              </small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
