import React from 'react';
import './Testimonials.css';
import image1 from '../images/image1.jpg';

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Users Say</h2>
    <div className="testimonials-container">
      <div className="testimonial">
        <img src={image1} alt="Testimonial 1" />
        <p>"This service is amazing! It has completely transformed the way I handle my PDF documents."</p>
        <h4>- John Doe</h4>
      </div>
      <div className="testimonial">
        <img src={image1} alt="Testimonial 2" />
        <p>"I couldn't be happier with the results. The tools are easy to use and very efficient."</p>
        <h4>- Jane Smith</h4>
      </div>
      <div className="testimonial">
        <img src={image1} alt="Testimonial 3" />
        <p>"Highly recommended! Excellent customer service and fantastic tools."</p>
        <h4>- Mark Wilson</h4>
      </div>
      <div className="testimonial">
        <img src={image1} alt="Testimonial 3" />
        <p>"Commandable job! Excellent tools."</p>
        <h4>- James Chalamet</h4>
      </div>
    </div>
  </section>
);

export default Testimonials;
