function CheckOut() {
  return (
    <section>
      <h1 className="check-header">Check Out</h1>
      <div className="checkout">
        <p>Personal Information</p>
        <div className="check-form">
          <input type="text" placeholder="Enter Full name" required />
          <input type="number" placeholder="Phone No" required />
          <p>Address</p>
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Landmark (Optional)" />
          <select name="" id="" placeholder="Country">
            <option value="">Nigeria</option>
            <option value="">USA</option>
            <option value="">Canada</option>
            <option value="">Netherland</option>
            <option value="">Russia</option>
            <option value="">Ghana</option>
          </select>
          <select name="" id="" placeholder="State">
            <option value="">Oyo</option>
            <option value="">Oyo</option>
            <option value="">Oyo</option>
            <option value="">Oyo</option>
            <option value="">Oyo</option>
          </select>
          <input type="number" placeholder="Postal Code" />
        </div>
        <div className="payment">
          <input type="checkbox" /> <span>Paypal</span>
        </div>
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
        <hr />
        <h4>
          Total <span>$498.00</span>
        </h4>
      </div>
    </section>
  );
}

export default CheckOut;
