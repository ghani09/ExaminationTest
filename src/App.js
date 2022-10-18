import React from 'react';
import Footer from './Footer';
import Header from './Header';
import{BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      <div>
    <div>
    <div><Header/></div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/log' element={<Login/>} />



    </Routes>
    

    
   
    </div>
    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
