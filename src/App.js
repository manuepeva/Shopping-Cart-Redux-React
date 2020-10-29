import React from 'react';
import Heading from './components/Heading';
import Footer from './components/Footer';
import './index.css';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './components/Redux/store'
import { Provider } from 'react-redux';

// Feature one - Feature one
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) : []
    }
  }

  createOrder = (order) => {
    alert("Need to save order for: " + order.name)
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id)
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x._id !== product._id)));
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    const alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({
        ...product,
        count: 1
      });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }



  render() {
    return (
      <Provider
        store={store}
      >
        <div className="grid-container">
          <Heading />
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products
                  addToCart={this.addToCart} />

              </div>
              <div className="sidebar">
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}
                />
              </div>

            </div>
          </main>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
