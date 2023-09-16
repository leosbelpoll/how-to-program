import Link from "next/link";
import React from "react";

function Nav() {
    return (
        <nav className="navbar-transparent navbar navbar-expand-md pt-4">
            <div className="container">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler btn btn-link"
                        style={{
                            marginTop: -5
                        }}
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
                            src="/logo.png"
                            alt=""
                            className="logo-inverse"
                            height={40}
                        />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand" href="/">
                                    <img
                                        src="/logo.png"
                                        alt=""
                                        className="logo-inverse"
                                        height={40}
                                    />
                                </Link>
                            </li>
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
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button">
                                        Es
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button">
                                        <i className="bi bi-brightness-high-fill"></i>
                                    </a>
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
