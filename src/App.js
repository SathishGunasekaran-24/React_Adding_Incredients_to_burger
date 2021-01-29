import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuild';
import CheckOut from './containers/checkOut/checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/orders/orders';

function App() {
  return (
    <div className="App">
    <Layout>
    <Switch>
    <Route path="/checkout" component={CheckOut} />
    <Route path="/orders" component={Orders} />
    <Route path="/" exact component={BurgerBuilder} />
    </Switch>
    </Layout>
    </div>
  );
}

export default App;
