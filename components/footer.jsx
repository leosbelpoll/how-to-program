import Link from "next/link";
import React, { useContext } from "react";
import {
  DARK_THEME,
  LANGUAGE_ENGLISH,
  LANGUAGE_SPANISH,
  LanguageContext,
  ThemeContext,
} from "./layout";
import { getTranslation } from "../utils/i18n.utils";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <footer className="pt-lg-10 pt-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="mb-4">
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
              <div className="mt-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                  molestias aliquam nihil voluptatibus cupiditate. Animi placeat
                  quisquam minus quis nobis.
                </p>
                <div className="fs-4 mt-4">
                  <a
                    className="mdi mdi-facebook text-muted me-2"
                    target="_blank"
                    href="https://www.facebook.com/comoprogramarde0a100"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      style={{ width: "1.05rem", height: "1.05rem" }}
                    >
                      <path
                        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                        style={{ fill: "currentcolor" }}
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="mdi mdi-twitter text-muted me-2"
                    target="_blank"
                    href="/twitter-page"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      style={{ width: "1.05rem", height: "1.05rem" }}
                    >
                      <path
                        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                        style={{ fill: "currentcolor" }}
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="mdi mdi-instagram text-muted "
                    target="_blank"
                    href="/intagram-page"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      role="presentation"
                      style={{ width: "1.05rem", height: "1.05rem" }}
                    >
                      <path
                        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                        style={{ fill: "currentcolor" }}
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-1">
              <div className="mb-4">
                <h3 className="fw-bold mb-3">Compañ</h3>
                <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      About
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Pricing
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Blog
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Careers
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="mb-4">
                <h3 className="fw-bold mb-3">Soporte</h3>
                <ul className="nav nav-footer flex-column nav-x-0 list-unstyled">
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Help and Support
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Become Instructor
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Get the app
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      FAQ’s
                    </a>
                  </li>
                  <li className=" ">
                    <a className="nav-link" href="/marketing/help-center/">
                      Tutorial
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          {/* Remove next two layers once we have info to put on above commented layers */}
          <div className="col-lg-2 col-md-3 col-sm-6 offset-lg-1"></div>
          <div className="col-lg-2 col-md-3 col-sm-6"></div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="mb-4">
              <h3 className="fw-bold mb-3">Ponte en contacto</h3>
              {/* <p>339 McDermott Points Hettingerhaven, NV 15283</p> */}
              <p className="mb-1">
                <a href="mailto:leitopoll25@gmail.com">leitopoll25@gmail.com</a>
              </p>
              {/* <p>
                  Phone:{" "}
                  <span className="fw-semi-bold">(000) 123 456 789</span>
                </p> */}
              {/* <div className="d-flex">
                <Link href="/marketing/help-center/">
                  <img
                    src="/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
                <Link className="ms-2" href="/marketing/help-center/">
                  <img
                    src="/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg"
                    alt=""
                    className="img-fluid"
                  />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="align-items-center g-0 border-top py-2 mt-6 row">
          <div className="col-lg-4 col-md-5 col-sm-12">
            <span>© 2023 {getTranslation('APP_TITLE', language)}</span>
          </div>
          <div className="d-md-flex justify-content-end col-lg-8 col-md-7 col-sm-12">
            <nav className="nav nav-footer">
              <Link className="nav-link ps-0" href="/private-policy">
                Privacidad
              </Link>
              {/* <a className="nav-link px-2 px-md-3" href="/marketing/help-center/">
                  Cookie Notice{" "}
                </a> */}
              <Link className="nav-link" href="/terms-of-use">
                Términos de uso
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
