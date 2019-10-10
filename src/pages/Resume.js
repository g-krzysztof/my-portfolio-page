import React from 'react';
import pdf from '../utils/krzysztofgryc.pdf';

function Resume() {
    return (
        <div className="Content__about">
            <h2>Doświadczenie zawodowe</h2>
            {/* <div className="Content__border-gradient"></div> */}
            <h4>od 2014<br />freelancer</h4>
            <ul className="Content__list">
                <li>tworzenie stron internetowych: html, css, js</li>
                <li>tworzenie stron www z wykorzystaniem systemów CMS: Joomla, Wordpress</li>
                <li>projektowanie layoutów stron www oraz grafik na potrzeby internetu </li>
                <li>projektowanie grafik na potrzeby poligrafii oraz reklamy zewnętrznej</li>
            </ul>
            <div className="Content__spacer"></div>
            <div className="Content__border-gradient"></div>
            <h4>2012-2014 <br />Infomax E. Marasik - Bielejec & G. Bielejec Sp. j.<br />
                <span className="Content__job-title">stanowisko: grafik komputerowy DTP / montażysta CTP</span></h4>
            <ul className="Content__list">
                <li>tworzenie projektów, m.in. ulotki, plakaty, foldery, logotypy, bannery</li>
                <li>sprawdzanie poprawności plików, usuwanie błędów, komputerowy montaż</li>
            </ul>

            <div className="Content__spacer"></div>
            <div className="Content__border-gradient"></div>

            <h4>2010-2012<br />freelancer</h4>
            <ul className="Content__list">
                <li>tworzenie stron www z wykorzystaniem systemów CMS: Joomla, Wordpress</li>
                <li>projektowanie grafik na potrzeby poligrafii oraz reklamy zewnętrznej</li>
            </ul>

            <div className="Content__spacer"></div>
            <div className="Content__border-gradient"></div>

            <h4>2007-2010<br />Drukarnia Offsetowa PRYM S.C. <br />
                <span className="Content__job-title">stanowisko: grafik komputerowy DTP / montażysta CTP</span></h4>
            <ul className="Content__list">
                <li>tworzenie projektów, m.in. ulotki, plakaty, foldery, gazetki produktowe</li>
                <li>sprawdzanie poprawności plików, usuwanie błędów, komputerowy montaż</li>
            </ul>


            <div className="Content__spacer"></div>
            <h3>Umiejętności i znajomość technologii</h3>
            <div className="Content__border-gradient"></div>
            <div className="Content__spacer"></div>
            <ul className="Content__list">
                <li>html</li>
                <li>css [sass, bem]</li>
                <li>java script [ES6]</li>
                <li>react</li>
                <li>git</li>
                <li>webpack</li>
                <li>node.js</li>
                <li>wordpress</li>
                <li>joomla</li>
                <li>photoshop</li>
            </ul>
            <div className="Content__spacer"></div>
            <h3>Link do pełnego CV w formacie pdf</h3>
            <div className="Content__border-gradient"></div>
            <div className="Content__spacer"></div>
            <p><a href={pdf} target="_blank" rel="noopener noreferrer"><span className="Content__strong-span">Krzysztof Gryc - plik pdf z CV</span></a></p>
            <div className="Content__spacer"></div>
        </div>
    );
}

export default Resume;