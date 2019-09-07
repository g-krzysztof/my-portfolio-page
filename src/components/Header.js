import React from 'react';
import '../css/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <ul className="Header__nav">
                <li className="Header__item">
                    <NavLink to="/" exact={true} >
                        <span className="Header__link"><i class="fa fa-user-circle-o Header__icon" aria-hidden="true"></i><br />about</span>
                    </NavLink>
                </li>
                <li className="Header__item">
                    <NavLink to="/resume">
                        <span className="Header__link"><i class="fa fa-file-text-o Header__icon" aria-hidden="true"></i><br />resume</span>
                    </NavLink>
                </li>
                <li className="Header__item">
                    <NavLink to="/works">
                        <span className="Header__link"><i class="fa fa-desktop Header__icon" aria-hidden="true"></i><br />works</span>
                    </NavLink>
                </li>
                <li className="Header__item">
                    <NavLink to="/contact">
                        <span className="Header__link"><i class="fa fa-paper-plane-o Header__icon" aria-hidden="true"></i><br />contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;