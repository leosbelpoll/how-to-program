import React from 'react'

function Nav() {
    return (
        <nav class="navbar-transparent navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="navbar-brand" href="/">
                                    <img
                                        src="/logo.png"
                                        alt=""
                                        class="logo-inverse"
                                        height={40}
                                    />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="https://www.youtube.com/channel/UCRpL41YulDOStKKsRk232QQ/playlists"
                                    target="_blank"
                                >
                                    <span className="ms-2">Cursos (En progreso ...)</span>
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
    )
}

export default Nav