// Header.js
import React from 'react';
import logo from './media/logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary nav-fill">
            <div className="container-fluid App-header">
                <a className="navbar-brand">
                    <img src={logo} height={200} width={200} alt="logo" />
                </a>

                {/* Toggle button for collapsed navbar (visible on small screens) */}
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav">
                        <li className="nav-item">
                            <button className="nav-link active fw-bold btn text-light" onClick={() => window.location.href = "https://github.com/takapia95/SkyDance_G1.git"}>
                                Github
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active fw-bold btn text-light" onClick={() => window.location.href = "https://api.nasa.gov/"}>
                                NASA-APIs
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Buttons outside of collapsed navbar (visible on larger screens) */}
                <div className="d-none d-lg-block"> {/* Hide on small screens */}
                    <ul className="nav">

                    <li className="nav-item">
                        <Link to="/" className="nav-link active fw-bold btn text-light">
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active fw-bold btn text-light" onClick={() => window.location.href = "https://github.com/takapia95/SkyDance_G1.git"}>
                                Github
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link active fw-bold btn text-light" onClick={() => window.location.href = "https://api.nasa.gov/"}>
                                NASA-APIs
                            </button>
                        </li>
                        <li className="nav-item">

                            <Link to="/about-us" className="nav-link active fw-bold btn text-light">
                                About Us
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Header;