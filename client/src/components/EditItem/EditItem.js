import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateItem } from '../../utils/api';
import './EditItem.css'

const EditItem = ({ items, updateItems }) => {
  const navigate = useNavigate();

  const handleSubmit = async (id, item) => {
    const updatedItem = await updateItem(id, item);
    updateItems(prevItems => prevItems.map(i => (i.id === id ? updatedItem : i)));
    alert("Update Successful")
    navigate('/edit/:id');
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    updateItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, [name]: value === '' ? '' : (name === 'quantity' || name === 'price') ? Number(value) : value }
          : item
      )
    );
  };

  return (
    <div className="edit-table-container">
      <h1>Edit Inventory Items</h1>
      <table className="edit-table">
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
              <td>
                <input
                  type="text"
                  name="itemID"
                  value={item.itemID}
                  onChange={(e) => handleChange(e, item.id)}
                  className="edit-input"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleChange(e, item.id)}
                  className="edit-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity === 0 ? 0 : item.quantity}
                  onChange={(e) => handleChange(e, item.id)}
                  className="edit-input"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={item.price === 0 ? '' : item.price}
                  onChange={(e) => handleChange(e, item.id)}
                  className="edit-input"
                />
              </td>
              <td>
                <button onClick={() => handleSubmit(item.id, item)} className="edit-item-button">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditItem;
