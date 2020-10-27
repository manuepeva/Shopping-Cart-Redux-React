import React, { Component } from 'react'
import data from './Data/Data'
import img from './Data/images/dress1.jpg'
import formatCurrency from './util';

var listOfImages = [];


export default class Products extends Component {

    render() {
        return (
            <div div >
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={img} />
                                    <p> {product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>
                                        {formatCurrency(product.price)}
                                    </div>
                                    <button className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        )
    }
}
