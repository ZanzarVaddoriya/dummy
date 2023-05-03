import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import SinglePage from './SinglePage';
import Product from './Product';


// import { BsCurrencyDollar } from "react-icons/fa";

function App() {


  
  return (
   <>
   <Routes>
        
        <Route path="/" element={ <Product/> } />
        <Route path="/singlepro/:id" element={ <SinglePage/> } />
      </Routes>
   </>
  );
}

export default App;