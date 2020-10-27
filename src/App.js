import React from 'react';
import Heading from './components/Heading';
import Footer from './components/Footer';
import './index.css';
import Products from './components/Products';
import data from './data.json'
// Feature one - Feature one
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }


  render() {
    return (
      <div className="grid-container">
        <Heading />
        <main>
          <Products products={this.state.products} />
        </main>
        <div className="content">
          <div className="main">

          </div>
          <div className="sidebar">

          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
