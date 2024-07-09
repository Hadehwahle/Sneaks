function CheckOut() {
  return (
    <section className="outter">
      <h1 className="check-header">Check Out</h1>
      <div className="check">
        <div className="checkout">
          <p>Personal Information</p>
          <div className="check-form">
            <div className="personal">
              <input type="text" placeholder="Enter Full name" required />
              <input type="number" placeholder="Phone No" required />
            </div>
            <p>Address</p>
            <div className="address">
              <input type="email" placeholder="Email Address" required />
              <input
                className="land1"
                type="text"
                placeholder="Landmark (Optional)"
              />
            </div>
            <div className="country">
              <select>
                <option value="country" selected disabled>
                  Country
                </option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="netherland">Netherland</option>
                <option value="russia">Russia</option>
                <option value="ghana">Ghana</option>
              </select>
              <select>
                <option value="state" selected disabled>
                  State
                </option>
                <option value="lagos">Lagos</option>
                <option value="oyo">Oyo</option>
                <option value="port harcourt">Port Harcourt</option>
                <option value="ogun">Ogun</option>
              </select>
              <input className="land2" type="text" placeholder="Landmark" />
              <input type="number" placeholder="Postal Code" />
            </div>
          </div>
          <p>Payment</p>
          <div className="payment">
            <div>
              <input type="checkbox" /> <span>Paypal</span>
            </div>
            <img src="images/pay.png" alt="paypal" />
          </div>
          <hr className="rule" />
          <div className="master-card">
            <div>
              <input type="checkbox" />
              <span> Credit or Debit Card</span>
            </div>
            <div>
              <img src="images/mastercard.png" alt="visa" />
            </div>
          </div>
          <hr className="rule" />
          <button className="btn1">PAY NOW</button>
        </div>
        <div className="summary">
          <h1>Summary</h1>
          <div className="summary-text">
            <p>
              Subtotal <span>$490.00</span>
            </p>
            <p>
              Estimated Shipping <span>$8.00</span>
            </p>
            <p>
              Estimated Tax <span>-</span>
            </p>
          </div>
          <hr className="rule" />
          <h4>
            Total <span>$498.00</span>
          </h4>
          <button className="btn2">PAY NOW</button>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
