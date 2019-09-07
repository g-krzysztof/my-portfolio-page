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
                <div class="ProfileCard__social">
                    <a href="https://dribbble.com/"> <span class="fab fa-dribbble"></span> </a>
                    <a href="https://twitter.com/"> <span class="fab fa-twitter"></span> </a>
                    <a href="https://github.com/"> <span class="fab fa-github"></span> </a>
                    <a href="https://www.spotify.com/"> <span class="fab fa-spotify"></span> </a>
                    <a href="https://stackoverflow.com/"> <span class="fab fa-stack-overflow"></span> </a>
                </div>
                <div className="ProfileCard__bottom">
                    <button className="ProfileCard__bottom-btn">download cv <i class="fas fa-download"></i></button>
                    <button className="ProfileCard__bottom-btn"><i class="fas fa-phone"></i> contact me</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
