import Link from "next/link";
import React, { useContext } from "react";

import { DARK_THEME, LIGHT_THEME, ThemeContext } from "./layout";

function Nav() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar-transparent navbar navbar-expand-md pt-4" data-bs-theme={theme === DARK_THEME ? "dark" : "light"}>
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
                        <img
                            src={theme === DARK_THEME ? "/images/logo-dark.png" : "/images/logo-light.png"}
                            alt=""
                            className="logo-inverse"
                            height={40}
                        />
                    </Link>
                    <div className="d-md-none float-end pt-1">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                            <li className="nav-item">
                                <a className="nav-link" href="#" role="button">
                                    Es
                                </a>
                            </li>
                            <li className="nav-item ms-3">
                                {theme === LIGHT_THEME && (<a className="nav-link btn" href="#" role="button" onClick={() => setTheme(DARK_THEME)}>
                                    <i className="bi bi-moon-stars-fill"></i>
                                </a>)}
                                {theme === DARK_THEME && (<a className="nav-link" href="#" role="button" onClick={() => setTheme(LIGHT_THEME)}>
                                    <i className="bi bi-brightness-high-fill"></i>
                                </a>)}

                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand d-none d-md-inline-block" href="/">
                                    <img
                                        src={theme === DARK_THEME ? "/images/logo-dark.png" : "/images/logo-light.png"}
                                        alt=""
                                        className="logo-inverse"
                                        height={40}
                                    />
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ/playlists"
                                    target="_blank"
                                >
                                    <i className="bi bi-grid-3x3-gap-fill"></i> Cursos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ"
                                    target="_blank"
                                >
                                    <i className="bi bi-youtube"></i> Youtube
                                </a>
                            </li>
                        </ul>
                        <div className="d-none d-md-inline-block">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button">
                                        Es
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {theme === LIGHT_THEME && (<a className="nav-link btn" href="#" role="button" onClick={() => setTheme(DARK_THEME)}>
                                        <i className="bi bi-moon-stars-fill"></i>
                                    </a>)}
                                    {theme === DARK_THEME && (<a className="nav-link" href="#" role="button" onClick={() => setTheme(LIGHT_THEME)}>
                                        <i className="bi bi-brightness-high-fill"></i>
                                    </a>)}

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
