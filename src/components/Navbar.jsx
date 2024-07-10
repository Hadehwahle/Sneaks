import { NavLink, Link } from "react-router-dom";
import CustomIcon from "../../public/icons/CustomIcon";
import CustomIcon2 from "../../public/icons/CustomIcon2";
import CustomIcon3 from "../../public/icons/CustomIcon3";

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FFAE5A" : "",
    };
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>SNEAKS</h1>
        </Link>
      </div>
      <nav>
        <NavLink>Home</NavLink>

        <NavLink style={navLinkStyles} to="/">
          Product
        </NavLink>

        <NavLink>About</NavLink>

        <NavLink>Contact Us</NavLink>
      </nav>
      <div className="icons">
        <div className="search">
          <NavLink>
            <CustomIcon2 />
          </NavLink>
        </div>
        <div className="user">
          <NavLink>
            <CustomIcon3 />
          </NavLink>
        </div>

        <NavLink to="cart">
          <CustomIcon />
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
