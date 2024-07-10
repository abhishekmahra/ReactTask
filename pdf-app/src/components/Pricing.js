import React from 'react';
import './Pricing.css';

const Pricing = () => (
  <section className="pricing">
    <h2>Pricing Plans</h2>
    <table>
      <tr>
        <th>Plan</th>
        <th>Price</th>
        <th>Features</th>
      </tr>
      <tr>
        <td>Free</td>
        <td>$0</td>
        <td>Basic tools</td>
      </tr>
      <tr>
        <td>Pro</td>
        <td>$9.99/month</td>
        <td>All tools</td>
      </tr>
    </table>
  </section>
);

export default Pricing;
