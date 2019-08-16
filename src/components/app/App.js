import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import Catalog from '../catalog/Catalog';
import OpenProduct from '../product/Product';
import Cart from '../cart/Cart';
import CartData from '../cart/CartData';
import Footer from '../footer/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  handleAddCart(product) {
    const existingProduct = this.state.cart.filter(p => p.id === product.id);
    if (existingProduct.length > 0) {
      const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id);
      const updatedUnitsProduct = {...existingProduct[0],units: existingProduct[0] + product};
      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProduct]
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  handleDeleteCart(item) {
    const updcart = this.state.cart.filter(c =>
      (c.id == undefined) ? "" : c.id !== item.id
    );

    this.setState({
      cart: [...updcart]
    })

    console.log(this.state.cart)

  }

  render() {
    return (
      <BrowserRouter>
        <Navbar cartData={this.state.cart.map(c => <span>{c.name}{c.units}</span>)} />
        <Switch>
          <Route exact path="/" render={() => (<Catalog />)} />
          <Route path="/cart" render={() => (<Cart addCartfunc={(this.handleAddCart.bind(this))} delCartfunc={(this.handleDeleteCart.bind(this))} cartData={this.state.cart} />)} />
          <Route path="/:id" component={() => (<OpenProduct addCartfunc={(this.handleAddCart.bind(this))} />)} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
