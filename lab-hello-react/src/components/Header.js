import React, {Component} from 'react';
// import './card.css';


class Header extends Component {
   render(){
      //Destructuración
      const {
         iconLeft,
         iconRight
      } = this.props;
      return (
         <header className="header">
            <div className="row">
               <nav className="inner-header">
                  <img className="logo" src={`images/${iconLeft}.svg`} alt="img"/>
                  <img className="menu-icon" src={`images/${iconRight}.svg`} alt="img"/>
               </nav>
            </div>
       </header>
      )
   }
}

export default Header