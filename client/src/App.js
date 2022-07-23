import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductForm from "./components/ProductForm";
import AllProducts from "./components/AllProducts";
import OneProduct from './components/OneProduct';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path ="/" element = {
          <>
            <ProductForm></ProductForm>
            <AllProducts></AllProducts>
            
          </>
        }>
        </Route>
        <Route exact path ="/Products/:id" element = {<OneProduct></OneProduct>}></Route>
        <Route exact path ="/Product/edit/:id" element = {<EditForm></EditForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
