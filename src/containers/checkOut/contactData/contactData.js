import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './contactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class contactData extends Component{
  state = {
    name:'xyz',
    email:'demo@gmail',
    address:{
      street:'abc',
      postalcode:'000000'
    },
    loading:false
  }

  orderHandler =(event) =>{
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({loading:true})
    const order = {
    ingredients: this.props.ingredients,
    price: this.props.price,
    customer:{
      name: 'Max',
      address:{
        street:'X',
        zipcode:'41351',
        country: 'Germany'
      },
      email: 'test@test.com'
    },
    deliverymethod: 'fastest'
  }
    console.log(order)
    axios.post('/orders.json',order)
        .then(response => {
          this.setState({loading:false})
          this.props.history.push('/');
        })
        .catch(error=>{
          this.setState({loading:false})
        });
    //alert("Thank you for Clicking Continue")
  }

  render(){
    let form =(
      <form>
          <input className="" type="text" name="name" placeholder="Your Name" />
          <input className="" type="email" name="email" placeholder="Your Email ID" />
          <input className="{}" type="text" name="street" placeholder="Your street" />
          <input className="{}" type="text" name="Postal Code" placeholder="Your Postal Code" />
        </form>
    );
    if (this.state.loading){
      form = <Spinner/>;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
          {form}
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </div>
    );
  }
}

export default contactData;

