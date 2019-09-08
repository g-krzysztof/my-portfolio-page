import React from 'react';
// import '../css/ProfileCard.css';
import selffoto from '../utils/profile-foto.png';

function ProfileCard() {
    return (
        <div className="ProfileCard">
            <div className="ProfileCard__content">
                <div className="ProfileCard__image"></div>
                <div className="ProfileCard__self-wrapper">
                    <a href="https://krzysztofg.pl">
                        <img className="ProfileCard__self-image" src={selffoto} alt="Krzysztof Gryc" />
                    </a>
                </div>
                <div className="ProfileCard__title">Krzysztof Gryc</div>
                <div className="ProfileCard__subtitle">Front-End Developer</div>
                <div className="ProfileCard__social">
                    <a href="https://dribbble.com/"> <span className="fab fa-dribbble"></span> </a>
                    <a href="https://twitter.com/"> <span className="fab fa-twitter"></span> </a>
                    <a href="https://github.com/"> <span className="fab fa-github"></span> </a>
                    <a href="https://www.spotify.com/"> <span className="fab fa-spotify"></span> </a>
                    <a href="https://stackoverflow.com/"> <span className="fab fa-stack-overflow"></span> </a>
                </div>
                <div className="ProfileCard__bottom">
                    <button className="ProfileCard__bottom-btn">download cv <i className="fas fa-download"></i></button>
                    <button className="ProfileCard__bottom-btn"><i className="fas fa-phone"></i> contact me</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
