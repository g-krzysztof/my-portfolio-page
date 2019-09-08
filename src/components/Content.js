import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About.js';
import Resume from '../pages/Resume.js';
import Works from '../pages/Works.js';
import Contact from '../pages/Contact.js';
// import '../css/Content.css';

function Content() {
    return (
        <div className="Content">
            <div className="Content__wrapper">

                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/works" component={Works} />
                    <Route path="/contact" component={Contact} />

                </Switch>

            </div>
        </div>


    );
}

export default Content;
