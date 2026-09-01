import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routing/>
       
      </BrowserRouter>
    </div>
  )
}

export default App