import React from 'react';
import './Inventory.css';

const InventoryPage = ({ items }) => {
  return (
    <div className="inventory-table-container">
      <h1>Inventory</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.itemID}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryPage;