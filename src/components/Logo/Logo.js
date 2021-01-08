import React from 'react';
import LogoImg from '../../images/burger-logo.png';
import classes from './Logo.css';
const Logo= () => {
  return(
    <div className={classes.Logo}>
    <img src={LogoImg} alt="burgerLogo"></img>
    </div>
  )
}

export default Logo;
