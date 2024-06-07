import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteItem } from '../../utils/api';
import './DeleteItem.css';

const DeleteItem = ({ items, updateItems }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteItem(id);
    updateItems(prevItems => prevItems.filter(item => item.id !== id));
    navigate('/delete');
  };

  return (
    <div className="delete-table-container">
      <h1>Delete Inventory Items</h1>
      <table className="delete-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.itemID}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className={`delete-item-button ${item.quantity !== 0 ? 'disabled' : ''}`}
                  onClick={() => handleDelete(item.id)}
                  disabled={item.quantity !== 0}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteItem;
