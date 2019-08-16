import React, { Component } from 'react';
import './Product.css';
import Products from '../../data/products.json';
import DetailProduct from '../product/DetailProduct';


export default class OpenProduct extends Component {
    render() {
        const idUrl = window.location.pathname.split('/');
        return (
            <div id="ibm-content-wrapper">
                <main role="main" aria-labelledby="ibm-pagetitle-h1">
                    <div id="ibm-content-main">
                        {
                            Products.map(p => (p.id == idUrl[1]) ? <DetailProduct key={p.id} {...p} addCart={this.props.addCartfunc} /> : "")
                        }
                    </div>
                </main>
            </div>
        )
    }
}
