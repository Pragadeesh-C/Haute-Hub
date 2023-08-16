import React, { useState } from "react";
import "../styles/SellProduct.css";

const SellProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();

  return (
    <div className="sellProduct">
      <div className="formDiv">
        <div className={`products ${name.length > 0 ? "active" : ""}`}>
          <input
            type="text"
            onChange={(text) => setName(text.target.value)}
            value={name}
          />
          <label>Name</label>
        </div>
        <div className={`products ${price.length > 0 ? "active" : ""}`}>
          <input
            type="text"
            onChange={(text) => setPrice(text.target.value)}
            value={price}
          />
          <label>Price</label>
        </div>
        <div className={`products ${desc.length > 0 ? "active" : ""}`}>
          <input
            type="text"
            onChange={(text) => setDesc(text.target.value)}
            value={desc}
          />
          <label>Description</label>
        </div>
        <div className="productImg">
          <input type="file" accept="image/*" className="productImg" 
          value={file} 
          onChange={(file) => setFile(file.target.files[0])}/>
        </div>
        <button className="addProduct">Add</button>
      </div>
    </div>
  );
};

export default SellProduct;
