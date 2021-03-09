import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './contactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class contactData extends Component{
   state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP CODE'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true,
          touched: false
        }
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'fastest',
        validation: {},
        valid: true
      }
    },
    formIsValid: false
  };

  orderHandler =(event) =>{
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({loading:true})
    let formData = {};
    for(let formDataElement in this.state.orderForm){
      formData[formDataElement] = this.state.orderForm[formDataElement].value;
    }
    console.log(formData);
    console.log(this.state.orderForm);
    const order = {
    ingredients: this.props.ingredients,
    price: this.props.price,
    orderData:formData
    }
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

checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }


  inputChangeHandler = (event,id) =>{
    const updatedForm = {...this.state.orderForm};
    const updatedFormElement = {...updatedForm[id]};
    updatedFormElement.value=event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedForm[id] = updatedFormElement;
    let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }

    this.setState({orderForm:updatedForm, formIsValid: formIsValid});
  }

  render(){
    let formElement = [];
    for(let key in this.state.orderForm){
      formElement.push({
        id:key,
        config: this.state.orderForm[key]
      });
      
    }
        let form =(
        <form onSubmit={this.orderHandler}>
          {
            formElement.map(
            element=>(
                <Input key={element.id}
                        changed={(event)=>this.inputChangeHandler(event,element.id)}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig} 
                        value={element.value}
                        invalid={!element.config.valid}
                        touched={element.config.touched}
                        shouldValidate={element.config.validation} />
          )
          )}
          <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        </form>
    );
    if (this.state.loading){
      form = <Spinner/>;
    }


    return(
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
          {form}
        
      </div>
    );
  }
}

export default contactData;

