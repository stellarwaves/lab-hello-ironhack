import React, {Component} from 'react';
// import './card.css';

class Hero extends Component {
   render(){
      //Destructuración
      const {
         title,
         subtitle,
         buttonText,
      } = this.props;
      return (
         <section className="hero">
            <div className="row">
            <div className="inner-hero">
               <div className="hero-content">
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                  <a href={'/'}>{buttonText}</a>
               </div>
            </div>
            </div>
         </section>
      )
   }
}


export default Hero