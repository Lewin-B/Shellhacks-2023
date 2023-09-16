import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div>
    <Header title = "Personify"
    description='Welcome to the site'/>
    <Buttons />
    </div>
  );
}

export default App;
