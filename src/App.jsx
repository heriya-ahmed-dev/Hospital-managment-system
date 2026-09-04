import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
import AddDepDescription from './Componenets/Medicine_store/Departments/AddDepDescription';
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routing/>
          <AddDepDescription/>
      </BrowserRouter>
    </div>
  )
}

export default App