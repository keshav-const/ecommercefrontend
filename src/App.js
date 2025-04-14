//import logo from './logo.svg';
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/navigation/Navigation.jsx';
import Product from './customer/components/Product//Product/Product.jsx';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
        <Navigation/>
     <div>
      <Product/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
