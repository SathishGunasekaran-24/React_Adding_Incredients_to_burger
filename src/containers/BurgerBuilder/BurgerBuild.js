import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
  state = {
    cheese:0,
    salad:0,
    meat:0
  }
  render(){
    return(
      <Aux>
      <Burger items={this.state}/>
      <div>Burger</div>
      <div>Burger Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;