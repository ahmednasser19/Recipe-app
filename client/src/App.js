import React from 'react' ; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
function App() {
  return (
    <div className="App">
     <Header />
     <Navbar /> 
     <Footer /> 
     
    </div>
  );
}

export default App;
