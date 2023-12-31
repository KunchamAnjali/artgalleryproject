import React, { useState } from 'react';

const Payment = () => {
  const [alertShown, setAlertShown] = useState(false);

  const handleNextClick = () => {
    setAlertShown(true);
    // You can perform additional actions here before showing the alert
    // For example, initiating the order delivery process
  };

  return (
    <div style={{ textAlign: 'center', color: 'blue' }}>
      <h1>Payment</h1>
      <br />
      <br />
      <br />
      <a href="https://www.paypal.com/in/home">
        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/04/947635-upi-transactions-india.jpg" height="300" width="400" alt="UPI" />
      </a>
      <h4>
        <a href="#" onClick={handleNextClick}>
          <button className="btn btn-secondary">Next</button>
        </a>
      </h4>

      {alertShown && (
        <div>
          <p>Your order will be delivered within 10-15 days.</p>
          {/* You can add more details or actions related to the order delivery process here */}
        </div>
      )}
    </div>
  );
};

export default Payment;
