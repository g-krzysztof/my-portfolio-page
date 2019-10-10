import React from 'react';

function About() {
    return (
        <div className="Content__about">
            <h2>Junior Front-end Developer</h2>
            <p>
                Moim celem zawodowym jest praca <br /> na stanowisku Front-end Developera.
            </p>
            <p>
                Na co dzień pracuję z HTML i CSS. <br />
                Rozwijam umiejętności Java Script.</p>
            <div className="Content__spacer"></div>
            <div className="Content__border-gradient"></div>
            <div className="Content__spacer"></div>
            <p>
                Od ponad dziesięciu lat zajmuję się projektowaniem graficznym. Swoją przygodę rozpocząłem od poligrafii, a kilka lat później zająłem się również projektami na potrzeby www.
            </p>
            <p>
                W ostatnim czasie pracuję głównie z <span className="Content__strong-span">framework React JS.</span>
            </p>
            <p>
                Tworzę także strony z wykorzystaniem systemów CMS Joomla i Wordpress.
            </p>

        </div>
    );
}

export default About;