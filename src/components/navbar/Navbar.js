import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav class="ibm-fluid ibm-fullwidth">
                    <div class="ibm-grid-container ibm-padding-top-1 ibm-padding-bottom-1 ibm-margin-bottom-2">
                        <div class="ibm-grid-col-sm-4-2 logo"><Link to="/">E-Commerce test</Link></div>
                        <div class="ibm-grid-col-sm-4-2 ibm-right cart"><Link to="/cart"><i class="fas fa-shopping-cart"></i>Cart <span className="cart-number-circle">{this.props.cartData.length}</span></Link></div>
                    </div>
                </nav>
            </header>
        );
    }
}
