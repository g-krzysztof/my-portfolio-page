import React from 'react';
import memory from '../utils/memory.jpg';
import todoapp from '../utils/todoapp.jpg';

// import { Scrollbars } from 'react-custom-scrollbars';

function Works() {
    return (
        // <Scrollbars autoHeight>
        <div className="Content__about">
            <h2>Projekty & programowanie</h2>
            <div className="Content__project">
                <div className="Content__project-description" >
                    <span className="Content__strong-span">Gra Memory - napisana w React.js</span>
                    <div className="Content__border-gradient"></div>
                    <p>wersja na zapamiętanie dwóch elementów:<br />
                        <a href="https://g-krzysztof.github.io/memory-game/" target="_blank" rel="noopener noreferrer">
                            <span className="Content__strong-span">https://g-krzysztof.github.io/memory-game/</span></a></p>
                    <p> wersja na zapamiętanie trzech elementów:<br />
                        <a href="https://krzysztofg.pl/memory-triple-match/" target="_blank" rel="noopener noreferrer">
                            <span className="Content__strong-span">https://krzysztofg.pl/memory-triple-match/</span></a></p>
                    <p> link do repozytorium:<br />
                        <a href="https://github.com/g-krzysztof/memory-game" target="_blank" rel="noopener noreferrer">
                            <span className="Content__strong-span">https://github.com/g-krzysztof/memory-game</span></a></p>
                </div>
                <a className="Content__project-image" href="https://g-krzysztof.github.io/memory-game/" target="_blank" rel="noopener noreferrer">
                    <img src={memory} alt="memory-game" />
                </a>
            </div>
            <div className="Content__project">
                <div className="Content__project-description" >
                    <span className="Content__strong-span">Lista Zadań, ToDo App - React.js</span>
                    <div className="Content__border-gradient"></div>
                    <p>link do wersji online:<br />
                        <a href="https://krzysztofg.pl/todoapp/" target="_blank" rel="noopener noreferrer">
                            <span className="Content__strong-span">https://krzysztofg.pl/todoapp/</span></a></p>
                    <p> link do repozytorium:<br />
                        <a href="https://github.com/g-krzysztof/todoapp" target="_blank" rel="noopener noreferrer">
                            <span className="Content__strong-span">https://github.com/g-krzysztof/todoapp</span></a></p>
                </div>
                <a className="Content__project-image" href="https://krzysztofg.pl/todoapp/" target="_blank" rel="noopener noreferrer">
                    <img src={todoapp} alt="todoapp" />
                </a>
            </div>
        </div>
        // </Scrollbars>
    );
}

export default Works;