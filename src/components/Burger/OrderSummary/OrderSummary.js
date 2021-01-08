import React from 'react';
import Aux  from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

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
    <p>Total Price: <strong>{props.price.toFixed(2)}</strong> </p>
    <p>Continue to Checkout?</p>
    <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    <Button btnType="Success" clicked={props.purchaseOrdered}>CONTINUE</Button>
    </Aux>
  )
}

export default OrderSummary;