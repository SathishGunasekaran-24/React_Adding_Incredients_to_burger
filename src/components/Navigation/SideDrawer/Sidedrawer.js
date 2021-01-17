import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/BackDrop/Backdrop';

const Sidedrawer =(props) =>{
  const SidedrawerCss = [classes.SideDrawer,props.status?classes.Open:classes.Close]
  return(
    <Aux>
    <Backdrop show={props.status} clicked={props.closed} />
    <div className={SidedrawerCss.join(' ')}>
    <div className={classes.Logo}>
      <Logo/>
    </div>
      <nav><NavigationItems /></nav>
    </div>
    </Aux>
  )
}

export default Sidedrawer;