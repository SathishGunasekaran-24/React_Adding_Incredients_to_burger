import React from 'react';
import classes from './Burger.css';
import BurgerIncredients from './BurgerIncredient/BurgerIncredients';

const Burger = (props) => {
  let transformincredients = Object.keys(props.items).map(key=>{
    return[...Array(props.items[key])].map((_,i)=>{
      return <BurgerIncredients key ={key+i} type={key}/>
    });
  }).reduce((arr, el)=>{
      return arr.concat(el)
    },[])
  console.log(transformincredients);
  if(transformincredients.length===0){
  return(
        <div className={classes.Burger}>
    <BurgerIncredients type="bread-top" />
    <p>Please add the incredients to the Burger </p>
    <BurgerIncredients type="bread-bottom" />
    </div>
    
  );
}
else{
    return(
    <div className={classes.Burger}>
    <BurgerIncredients type="bread-top" />
    {transformincredients}
    <BurgerIncredients type="bread-bottom" />
    </div>
  );
}
}

export default Burger;