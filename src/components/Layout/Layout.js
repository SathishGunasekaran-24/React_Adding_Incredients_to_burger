import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const Layout = (props) =>{
  return(
    <Aux>
    <div>
    <Toolbar/>
    Toolbar, SideDrawer, Backdrop
    </div>
    <main className={classes.content}>
    {props.children}
    </main>
    </Aux>
  )
}

export default Layout;