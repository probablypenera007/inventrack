import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../utils/api";
import "./AddItem.css";

const AddItem = ({ items, updateItems }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [itemID, setItemID] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = await addItem({
      itemID,
      name,
      quantity: Number(quantity),
      price: Number(price),
    });
    updateItems([...items, newItem]);
    navigate("/");
  };

  return (
    <div className="add-item-container">
      <h1>Add Items in the Invetory</h1>
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="form-group">
          <label htmlFor="itemId">ITEM ID</label>
          <input
            className="form-input id"
            type="text"
            id="itemId"
            value={itemID}
            onChange={(e) => setItemID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">ITEM NAME:</label>
          <input
            className="form-input item"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">QUANTITY</label>
          <input
            className="form-input quantity"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">PRICE $</label>
          <input
            className="form-input price"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-item-button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddItem;
