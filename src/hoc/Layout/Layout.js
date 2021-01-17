import React,{Component}from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/SideDrawer/Sidedrawer'

class Layout extends Component{
  state={
    showSideDrawer: false
  }

  sideDrawerHandler=()=>{
    this.setState((prevstate)=>{
      return{showSideDrawer:!this.state.showSideDrawer};
      });
 
  }

  render(){
    return(
      <Aux>
          <div>
          <Toolbar statusChange={this.sideDrawerHandler}/>
          
          <Sidedrawer status={this.state.showSideDrawer} closed={this.sideDrawerHandler}/>
          </div>
          <main className={classes.content}>
          {this.props.children}
          </main>
      </Aux>
      )
  }
}

export default Layout;