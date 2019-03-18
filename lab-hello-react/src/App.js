import React, { Component } from 'react';
// import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <header class="header">
            <div class="row">
              <div class="inner-header">
                <img class="logo" src="images/ironhack-logo.svg" alt="img"/>
                <nav>
                  <img class="menu-icon" src="images/menu-top.svg" alt="img"/>
                </nav>
              </div>
            </div>
          </header>
          <section class="hero">
            <div class="row">
              <div class="inner-hero">
                <div class="hero-content">
                  <h1>Say hello to React JS</h1>
                  <p>You will learn a Frontend framework from scratch,to become Ninka developer</p>
                  <a href={'/'}>Awesome!</a>
                </div>
              </div>
            </div>
          </section>
          <section class="info">
            <div class="row">
              <div class="inner-info">
                <article class="card">
                  <img class="logo" src="images/icon1.png" alt="img"/>
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </article>
                <article class="card">
                  <img class="logo" src="images/icon2.png" alt="img"/>
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </article>
                <article class="card">
                  <img class="logo" src="images/icon3.png" alt="img"/>
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </article>
                <article class="card">
                <img class="logo" src="images/icon4.png" alt="img"/>
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                </article>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
