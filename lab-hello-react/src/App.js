import React, { Component } from 'react';
// import Card from './components/Card';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Hero from './components/Hero';

const data = [
  { 
    title: 'titulo', 
    text: 'text', 
    img: 'icon1.png'
  }, 
  { 
    title: 'titulo', 
    text: 'text', 
    img: 'icon2.png'
  },
  { 
    title: 'titulo', 
    text: 'text', 
    img: 'icon3.png'
  },
  { 
    title: 'titulo', 
    text: 'text', 
    img: 'icon4.png'
  }
]


class App extends Component {
 
  renderList() {
    return (data.map((item, index) => {
      return <Card key ={`id${index}`}
      title = {item.title}
      img = {item.img}
      text= {item.text}/>
    }))
  }

  render() {
    return (
        <div>
          <Header
            iconLeft="ironhack-logo"
            iconRight="menu-top"
          />

          <Hero
            title="Hola"
            subtitle="Hola"
            buttonText="Hola"/>
          <section class="info">
            <div class="row">
              <div class="inner-info">
                {this.renderList()}
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
