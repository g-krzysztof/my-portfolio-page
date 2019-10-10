import React from 'react';

function Contact() {
    return (
        <div className="Content__about">
            <h2>Kontakt</h2>
            <p>e-mail: <span className="Content__strong-span">hello@krzysztofg.pl</span></p>
            <p>telefon: <span className="Content__strong-span">+48 535 38 37 27</span></p>
            <p></p>
            <div className="Content__border-gradient"></div>
            <p></p>
            <p>linkedin:<br /> <a href="https://linkedin.com/in/krzysztof-gryc" target="_blank" rel="noopener noreferrer">
                <span className="Content__strong-span">https://linkedin.com/in/krzysztof-gryc</span></a></p>
            <p>github:<br /> <a href="https://github.com/g-krzysztof" target="_blank" rel="noopener noreferrer">
                <span className="Content__strong-span">https://github.com/g-krzysztof</span></a></p>

        </div>
    );
}

export default Contact;