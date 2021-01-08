import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

  const prices = {
    cheese:1,
    salad:2,
    meat:3,
    bacon:4
  }

class BurgerBuilder extends Component{
 
  state = {
    ingredients:{
    cheese:0,
    salad:0,
    meat:0,
    bacon:0},
    totalprice:0,
    purchasable: false,
    purchasing:false

  }
  orderedItems = (ingredients) =>{
    const sum = Object.keys(ingredients).map(type => {return ingredients[type]}).reduce((sum,el)=>{
      return sum+el
    },0)
    this.setState(
      {
        purchasable:sum > 0
      }
    )
  }
  addIngredients = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIncredients = {
    ...this.state.ingredients
    }
    updatedIncredients[type]=updatedCount;
    const oldPrice = this.state.totalprice;
    const updatedPrice = oldPrice+prices[type];
    this.setState(
      {
        ingredients:updatedIncredients,
        totalprice:updatedPrice
      }
    )
    this.orderedItems(updatedIncredients)
  }

changePurchasing = () => {
  this.setState(
    {
      puchasing:true
    }
  )
}

changeModel = () => {
  this.setState(
    {
      puchasing:false
    }
  )
}

placeOrder = () => {
    alert("Thank you for Clicking Continue")
}
  removeIngredients = (type) => {
    console.log(this.state.purchasable)
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0){
      return
    }
    const updatedCount = oldCount-1;
    const updatedIncredients = {
    ...this.state.ingredients
    }
    updatedIncredients[type]=updatedCount;
    const oldPrice = this.state.totalprice;
    const updatedPrice = oldPrice-prices[type];
    this.setState(
      {
        ingredients:updatedIncredients,
        totalprice:updatedPrice
      }
    )
    this.orderedItems(updatedIncredients)
  }
  render(){
    console.log(this.state.purchasable)
    const disabledInfo
     = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key]= disabledInfo[key]<=0
    }
    return(
      <Aux>
      
      <Modal show={this.state.puchasing} clicked={this.changeModel}>
      <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancelled={this.changeModel} 
                    purchaseOrdered={this.placeOrder}
                    price={this.state.totalprice}/>
      </Modal>
      <Burger items={this.state.ingredients}/>
      <div>Burger</div>
      <div><BurgerControls 
      removeIngredients={this.removeIngredients}
      addIngredients={this.addIngredients}
      disabled = {disabledInfo}
      price={this.state.totalprice}
      orderButton = {this.state.purchasable}
      purchasing={this.changePurchasing}
      /></div>
      </Aux>
    );
  }
}

export default BurgerBuilder;