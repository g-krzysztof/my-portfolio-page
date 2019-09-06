import React from 'react';
import '../css/App.css';
import Header from './Header';
import ProfileCard from './ProfileCard';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <div className="App__layout">
        <Header />
        <ProfileCard />
        <Content />
      </div>
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

export default App;
