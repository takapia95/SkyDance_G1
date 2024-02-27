import React from 'react'
import logo from './media/logo.png';

const Header = () => {
  return (
        <nav class = "navbar navbar-expand-lg bg-body-tertiary nav-fill">
        <div class = "container-fluid App-header">
            <a className = "navbar-brand">
                <img src={logo} height = {50} width = {50} alt="logo"/>
            </a>

            <div class = "collapse navbar-collapse btn-3 " id = "navbarNav">
            <ul class = "navbar-nav">
                <li class = "nav-item">
                    <a class = "nav-link active fw-bold" href = "https://github.com/takapia95/SkyDance_G1.git">Github</a>
                </li>
                <li class = "nav-item">
                    <a class = "nav-link active fw-bold" href = "https://api.nasa.gov/">NASA APIs</a>
                </li>
            </ul>
            <h1>SKY DANCE</h1>
            </div>
        </div>
        </nav>
  )
}

export default Header;