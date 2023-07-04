import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title,setTitle]=useState('')
  const [price,setPrice]=useState(0)
  const [description,setDescription]=useState('')
  const [category,setCategory]=useState('')
  const [image,setImages]=useState('')
  const navigate= useNavigate()



  const formSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/products",{
      title:title,
      price:price,
      description:description ,
      category:category,
      image:image
    }).then((data)=>{
      // console.log(data);
      navigate('/products')

    })
  };


  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type={"text"}
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type={"number"}
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            // AriaAttributes="Product Price"
            onChange={(e)=>setPrice(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <input
            type={"text"}
            className="form-control"
            id="productDescription"
            placeholder="Product Description"
            // AriaAttributes="Product Description"
            onChange={(e)=>setDescription(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
          Category
          </label>
          <input
            type={"text"}
            className="form-control"
            id="productCategory"
            placeholder="Product Category"
            // AriaAttributes="Product Description"
            onChange={(e)=>setCategory(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
          image
          </label>
          <input
            type={"link"}
            className="form-control"
            id="productImage"
            placeholder="Product Image"
            // AriaAttributes="Product Description"
            onChange={(e)=>setImages(e.target.value)}

          />
        </div>

        <button type={"submit"} className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
