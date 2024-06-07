import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import "./InventoryReport.css"

const InventoryReport = ({ items }) => {
  const handleGeneratePDF = () => {
    const doc = new jsPDF();

    //current date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();
    const dateTimeStr = `${dateStr} ${timeStr}`;

    //header text
    doc.text('INVENTORY REPORT', 20, 20);
    doc.text(`Date: ${dateTimeStr}`, 20, 40);

    //table
    doc.autoTable({
      startY: 50,
      head: [['ITEM ID', 'ITEM NAME', 'QTY', 'VALUE $']],
      body: items.map(item => [item.itemID, item.name, item.quantity, `$${item.price.toFixed(2)}`]),
    });

    //dynamic filename
    const filename = `inventory-report_${now.toISOString()}.pdf`;

    // Save the PDF
    doc.save(filename);
  };

  return (
    <div className="report-container">
    <h1 className="report-header">INVENTORY REPORT</h1>
    <p className="report-date">{`DATE: ${new Date().toLocaleDateString()}`}</p>
    <table className="report-table">
      <thead>
        <tr>
          <th className="left-align bold">ITEM ID</th>
          <th className="center-align">ITEM NAME</th>
          <th className="center-align">QTY</th>
          <th className="center-align">VALUE $</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className="left-align bold">{item.itemID}</td>
            <td className="center-align">{item.name}</td>
            <td className="center-align">{item.quantity}</td>
            <td className="center-align">${item.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="report-button" onClick={handleGeneratePDF}>
      Save as PDF
    </button>
  </div>
  );
};

export default InventoryReport;
