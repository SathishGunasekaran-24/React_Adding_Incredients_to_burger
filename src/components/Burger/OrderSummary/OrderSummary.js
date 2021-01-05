import React from 'react';
import Aux  from '../../../hoc/Aux';
const OrderSummary = (props) =>{
  const ingredientSummary = Object.keys(props.ingredients).map(
    ingrident => {
      return <li key={ingrident}><span style={{textTransform:'capitalize'}}>{ingrident} : {props.ingredients[ingrident]}</span></li>
    }
  )
  return(
    <Aux>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {ingredientSummary}
    </ul>
    <p>Continue to Checkout?</p>
    </Aux>
  )
}

export default OrderSummary;