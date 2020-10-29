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
                />
              </div>
              <div className="sidebar">
                <Cart
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
