import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormCategory from './Category/FormCategory';
import ListCategory from './Category/ListCategory';
import Home from './Home';
import Login from './Login';
import ListOrders from './Orders/ListOrders';
import OrderItems from './Orders/OrderItems';
import FormProducer from './Producer/FormProducer';
import ListProducer from './Producer/ListProducer';
import FormProduct from './Product/FormProduct';
import ListProduct from './Product/ListProduct';
import FormProject from './Project/FormProject';
import ListProject from './Project/ListProject';
import ViewProject from './Project/ViewProject';
import FormUser from './User/FormUser';
import ListUser from './User/ListUser';


class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>

                    <Route path="/list-user" exact component={ListUser}/>
                    <Route path="/create-user" exact component={FormUser}/>

                    <Route path="/list-project" exact component={ListProject}/>
                    <Route path="/create-project" exact component={FormProject}/>
                    <Route path="/project-detail/:id" exact component={ViewProject}/>
                    <Route path="/list-category" exact component={ListCategory}/>
                    <Route path="/create-category" exact component={FormCategory}/>
                    <Route path="/list-producer" exact component={ListProducer}/>
                    <Route path="/create-producer" exact component={FormProducer}/>
                    <Route path="/list-product" exact component={ListProduct}/>
                    <Route path="/create-product" exact component={FormProduct}/>
                    <Route path="/list-orders" exact component={ListOrders}/>
                    <Route path="/list-order-item/:id" exact component={OrderItems}/>
                </Switch>
            </Router>
        );
    }
}

export default Main;