import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Header title = "Personify"
      description='Welcome to the site'></Header>
      <Body />
      <Footer/>
    </>
  
  );
}

export default App;
