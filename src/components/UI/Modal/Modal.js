import React from 'react';
import classes from './Modal.css';
import BackDrop from '../BackDrop/Backdrop';
import Aux from '../../../hoc/Aux';

const Modal = (props) => {
  return(
    <Aux>
    <BackDrop show={props.show} clicked={props.clicked}/>
    <div className={classes.Modal}
    style={{
      transform: props.show ? 'translateY(0)':'translateY(-100vh)',
      opacity: props.show ? '1':'0'
    }}>
      {props.children}
    </div>
    </Aux>
  )
}

export default Modal;