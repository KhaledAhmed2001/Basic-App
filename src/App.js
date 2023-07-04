import React from "react"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./component/pages/Home"
import Products from "./component/pages/Products"
import AddProduct from "./component/pages/AddProduct"
import ProductDetails from "./component/pages/ProductDetails"


function App() {
  return (
    <div>
      <Navbar/>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="products"element={<Products/>}/>
            <Route path="products/add"element={<AddProduct/>}/>
            <Route path="products/:productID" element={<ProductDetails/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App