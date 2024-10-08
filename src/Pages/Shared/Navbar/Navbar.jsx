import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut();
  };
  const navItems = (
    <>
      <li>
        <Link className="color-yellow-100" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="color-yellow-100" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="color-yellow-100" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="color-yellow-100" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="color-yellow-100" to="/orders/salads">
          Our Shop
        </Link>
      </li>
      <li>
        <Link
          className="relative text-2xl color-yellow-100"
          to="dashboard/cart"
        >
          <FiShoppingCart />
          <span className="absolute top-0 mt-[-6px] right-0 text-sm">
            {cart.length}
          </span>
        </Link>
      </li>
      <li>
        {user?.email ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <Link className="color-yellow-100" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar text-gray-200 bg-[#0000006e] fixed z-10 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link className="" to="/">
          <p>
            <span className="text gray-300 text-3xl">BISTRO BOSS</span>
            <br />
            <span className="tracking-widest	">RESTAURANT</span>
          </p>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold gap-5">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
