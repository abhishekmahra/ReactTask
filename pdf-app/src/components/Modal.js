import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-header">
          <h2>All PDF Tools</h2>
        </div>
        <div className="modal-body">
          <div className="tool-category">
            <h3>ORGANIZE PDF</h3>
            <ul>
              <li>Merge PDF</li>
              <li>Split PDF</li>
              <li>Remove pages</li>
              <li>Extract pages</li>
              <li>Organize PDF</li>
              <li>Scan to PDF</li>
            </ul>
          </div>
          <div className="tool-category">
            <h3>OPTIMIZE PDF</h3>
            <ul>
              <li>Compress PDF</li>
              <li>Repair PDF</li>
              <li>OCR PDF</li>
            </ul>
          </div>
          <div className="tool-category">
            <h3>CONVERT TO PDF</h3>
            <ul>
              <li>JPG to PDF</li>
              <li>WORD to PDF</li>
              <li>POWERPOINT to PDF</li>
              <li>EXCEL to PDF</li>
              <li>HTML to PDF</li>
            </ul>
          </div>
          <div className="tool-category">
            <h3>CONVERT FROM PDF</h3>
            <ul>
              <li>PDF to JPG</li>
              <li>PDF to WORD</li>
              <li>PDF to POWERPOINT</li>
              <li>PDF to EXCEL</li>
              <li>PDF to PDF/A</li>
            </ul>
          </div>
          <div className="tool-category">
            <h3>EDIT PDF</h3>
            <ul>
              <li>Rotate PDF</li>
              <li>Add page numbers</li>
              <li>Add watermark</li>
              <li>Edit PDF</li>
            </ul>
          </div>
          <div className="tool-category">
            <h3>PDF SECURITY</h3>
            <ul>
              <li>Unlock PDF</li>
              <li>Protect PDF</li>
              <li>Sign PDF</li>
              <li>Redact PDF</li>
              <li>Compare PDF</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
