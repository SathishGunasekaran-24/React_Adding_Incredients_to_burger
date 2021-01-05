import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.css';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BurgerControls = (props) => {
  console.log(props.orderButton)
  return (
    <div className={classes.BurgerControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
      {
        controls.map(ctrl => (
          <BurgerControl
            key={ctrl.type}
            label={ctrl.label}
            removeIngredient={() => props.removeIngredients(ctrl.type)}
            addIngredient={() => props.addIngredients(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        )
        )
      }
      
      <button className={classes.OrderButton} onClick={props.purchasing} disabled={!props.orderButton}>Order Now</button>
    </div>
  )
}

export default BurgerControls;