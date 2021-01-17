import React,{Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WarrpedComponent,axios) => {
  
  return class extends Component{
    state={
      error:null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render(){
      
      return(
    <Aux>
      <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
        {this.state.error ? this.state.error.message:null}
      </Modal>

      <WarrpedComponent {...this.props}/>
    </Aux>
      )
    }
  }
}

export default withErrorHandler;