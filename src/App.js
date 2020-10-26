import React from 'react';
import Heading from './components/Heading';
import Footer from './components/Footer';
import './index.css';
// Feature one - Feature one
function App() {
  return (
    <div className="grid-container">
      <Heading />
      <main>
        Product List
      </main>
      <Footer />
    </div>
  );
}

export default App;
