import React,{Component} from 'react';
import CheckOutSummary from '../../components/order/checkOutSummary/checkOutSummary';
import {Route} from 'react-router-dom';
import ContactData from './contactData/contactData'

class CheckOut extends Component{
  state={
    ingredients:null,
    totalPrice:0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {}
    let price = 0;
    for(let param of query.entries()) {
      if (param[0] === 'price'){
        price = param[1];
      }else{
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ingredients: ingredients , totalPrice: price});
  }

  CheckoutContinuedHandler =() =>{
    this.props.history.replace('/checkout/contact-data');
  }

  CheckoutCancelledHandler =() =>{
    this.props.history.goBack();
  }
  render(){
    return(
      <div>
        <CheckOutSummary 
        ingredients={this.state.ingredients}
        onCheckoutCancelled={this.CheckoutCancelledHandler}
        onCheckoutContinued={this.CheckoutContinuedHandler}/>
        <Route path={this.props.match.path + '/contact-data'} render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}/>
      </div>
    );
  };
}

export default CheckOut;