import React from 'react'
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Slider from './Components/Slider';
import {Routes, Route} from 'react-router-dom'
import About from './Components/About';
import ProductDetailes from './Components/ProductDetailes'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
            <>  
            <Slider/> 
            <ProductList/>
            </>}>
      </Route>
       <Route path='about' element={<About/>   } />
       {/* /: daynamic variable  */}
       <Route path='product/:productId' element={<ProductDetailes/>   } />

      </Routes>
      
    </div>
  );
}

export default App;
