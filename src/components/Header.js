import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <div className="Header">
            <ul className="Header__nav">
                <li className="Header__item"><span className="Header__link"><i class="fa fa-user-circle-o Header__icon" aria-hidden="true"></i><br />about</span></li>
                <li className="Header__item"><span className="Header__link"><i class="fa fa-file-text-o Header__icon" aria-hidden="true"></i><br />resume</span></li>
                <li className="Header__item"><span className="Header__link"><i class="fa fa-desktop Header__icon" aria-hidden="true"></i><br />works</span></li>
                <li className="Header__item"><span className="Header__link"><i class="fa fa-paper-plane-o Header__icon" aria-hidden="true"></i><br />contact</span></li>
            </ul>
        </div>
    );
}

export default Header;
