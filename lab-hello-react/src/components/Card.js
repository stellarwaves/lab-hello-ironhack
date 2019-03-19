import React, {Component} from 'react';
// import './card.css';

class Card extends Component {
   render(){
      const {
         title,
         text,
         img,
      } = this.props;

      return (
         <article>
            <img className="logo" src={`/images/${img}`} alt=""/>
            <h3>{title}</h3>
            <p>{text}</p>
         </article>
      )
   }
}


export default Card