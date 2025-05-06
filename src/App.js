import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakePayments from './components/MakePayments';
import Getproducts from './components/GetProducts';
import AddProducts from './AddProducts';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';











function App() {
  return (

   
    <div>
      <Router>


        

         <header className='App-header'>
          <h4>Welcome To HomeGlow</h4>
         </header>
         

         <Navbar></Navbar>
      
        
         {/* <MakePayments></MakePayments>
         <AddProducts></AddProducts>
         <Getproducts></Getproducts>
         <AboutUs></AboutUs>
         <ContactUs></ContactUs> */}
         
         
         
         
         
         
        <Routes>
        
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/makepayments" element={<MakePayments />} />
          <Route path="/" element={<Getproducts />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/contactus" element={<ContactUs/>} />


         

          
          


          
        
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
