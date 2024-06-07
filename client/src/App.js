import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainMenu from './components/MainMenu/MainMenu';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';
import DeleteItem from './components/DeleteItem/DeleteItem';
import InventoryReport from './components/InventoryReport/InventoryReport';
import InventoryPage from './components/Inventory/Inventory';
import { getItems } from './utils/api';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getItems();
      setItems(itemsData);
    };
    fetchItems();
  }, []);

  const updateItems = (newItems) => {
    setItems(newItems);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/inventory" element={<InventoryPage items={items} />} />
          <Route path="/add" element={<AddItem items={items} updateItems={updateItems} />} />
          <Route path="/edit/:id" element={<EditItem items={items} updateItems={updateItems} />} />
          <Route path="/delete" element={<DeleteItem items={items} updateItems={updateItems} />} />
          <Route path="/report" element={<InventoryReport items={items} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
