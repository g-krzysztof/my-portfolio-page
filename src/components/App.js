import React from 'react';
import '../css/App.css';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Content from './Content';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from 'react-router-dom';

const App = ({ location }) => {
  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <div className="App__layout">
            <Header />
            <ProfileCard />
            <Content />
          </div>
        </CSSTransition>
      </TransitionGroup>

      <ul class="App__squares">
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
        <li class="fa fa-stop" aria-hidden="true"></li>
      </ul>
    </div>
  );
}

export default withRouter(App);