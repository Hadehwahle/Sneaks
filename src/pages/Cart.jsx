import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <section className="cart">
      <div className="cart-content">
        <div className="sub-cart">
          <div className="nike">
            <div className="sub-nike">
              <img src="images/newnikemini.png" alt="nike" />
            </div>
            <div className="increment">
              <p>NIKE AIR MAX</p>
              <div>
                <img src="icons/minus-square.svg" alt="minus" />
                <span style={{ fontSize: "0.8rem" }}>1</span>
                <img src="icons/plus-square.svg" alt="minus" />
              </div>
            </div>
          </div>
          <div className="price">
            <p>$370</p>
            <img src="icons/trash.svg" alt="delete-icon" />
          </div>
        </div>
        <div className="sub-cart">
          <div className="addidas">
            <div className="sub-addidas">
              <img src="images/addidasmini.png" alt="nike" />
            </div>
            <div className="increment">
              <p>ADDIDAS</p>
              <div>
                <img src="icons/minus-square.svg" alt="minus" />
                <span style={{ fontSize: "0.8rem" }}>1</span>
                <img src="icons/plus-square.svg" alt="minus" />
              </div>
            </div>
          </div>
          <div className="price">
            <p>$120</p>
            <img src="icons/trash.svg" alt="delete-icon" />
          </div>
        </div>
      </div>
      <div className="summary">
        <h1>Summary</h1>
        <div className="summary-text">
          <p>
            Subtotal <span>$370.00</span>
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
          Total <span>$378.00</span>
        </h4>
        <NavLink to="checkout">
          <button type="submit">CHECKOUT</button>
        </NavLink>
      </div>
    </section>
  );
}

export default Cart;
