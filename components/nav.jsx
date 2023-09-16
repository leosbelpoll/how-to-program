import Link from "next/link";
import React from "react";

function Nav() {
    return (
        <nav class="navbar-transparent navbar navbar-expand-md pt-4">
            <div className="container">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler btn btn-link"
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
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand ms-2 d-md-none" href="/">
                        <img
                            src="/logo.png"
                            alt=""
                            class="logo-inverse"
                            height={40}
                        />
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="navbar-brand" href="/">
                                    <img
                                        src="/logo.png"
                                        alt=""
                                        class="logo-inverse"
                                        height={40}
                                    />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    aria-current="page"
                                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ/playlists"
                                    target="_blank"
                                >
                                    <i class="bi bi-grid-3x3-gap-fill"></i> Cursos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ"
                                    target="_blank"
                                >
                                    <i class="bi bi-youtube"></i> Youtube
                                </a>
                            </li>
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#" role="button">
                                        Es
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" role="button">
                                        <i class="bi bi-brightness-high-fill"></i>
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
