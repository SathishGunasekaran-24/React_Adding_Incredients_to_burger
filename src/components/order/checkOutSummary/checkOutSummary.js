import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './checkOutSummary.css';

const CheckOutSummary = (props) => {
  return(
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div>
        <Burger items={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default CheckOutSummary;