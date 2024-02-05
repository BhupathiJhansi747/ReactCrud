import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import View from './Pages/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit' element={<Add/>}></Route>
        <Route path='/view' element={<View/>}></Route>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
