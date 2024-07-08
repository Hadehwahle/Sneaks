import { useNavigate } from "react-router-dom";
const sneaks = [
  {
    name: "YEEZY BOOST",
    price: 240,
    photoName: "images/yeezy.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "SKETCHERS",
    price: 140,
    photoName: "images/sketches.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "NIKE AIR MAX",
    price: 370,
    photoName: "images/nikeairmax.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "BALENCIAGA",
    price: 280,
    photoName: "images/balenciaga.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "FILA",
    price: 220,
    photoName: "images/newfilla.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "NIKE AIR JORDAN",
    price: 340,
    photoName: "images/nikeairjordan.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "NEW BALANCE",
    price: 200,
    photoName: "images/newbalance.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "ADDIDAS",
    price: 120,
    photoName: "images/addidas.png",
    cart: "icons/cart-pro.svg",
  },
  {
    name: "ALL STAR",
    price: 100,
    photoName: "images/allstar.png",
    cart: "icons/cart-pro.svg",
  },
];

function Products() {
  return (
    <>
      <section className="products">
        {sneaks.map((product) => (
          <Shop data={product} key={sneaks.name} />
        ))}
      </section>
    </>
  );
}
function Shop(props) {
  const navigate = useNavigate();
  const { name, price, photoName, cart } = props.data;
  return (
    <div className="product">
      <img onClick={() => navigate("/cart")} className="cart-icon" src={cart} />

      <img className="shoe-sneak" src={photoName} />
      <div className="name-price">
        <p>{name}</p>
        <p className="dollar">${price}</p>
      </div>
    </div>
  );
}
export default Products;
