import React from 'react';
import './Features.css';
import mergefiles from '../images/mergefiles.jpeg';
import split from '../images/split.jpeg';

const Features = () => (
  <section className="features">
    <h2>Our Features</h2>
    <div className="feature">
      <img src={mergefiles} alt="Icon 1" />
      <h3>Merge PDFs</h3>
      <p>Combine multiple PDF files into one</p>
    </div>
    <div className="feature">
      <img src={split} alt="Icon 2" />
      <h3>Split PDFs</h3>
      <p>Separate a single PDF into multiple files</p>
    </div>
  </section>
);

export default Features;
