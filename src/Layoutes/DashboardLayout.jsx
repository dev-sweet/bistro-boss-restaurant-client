import { AiFillHome } from "react-icons/ai";
import { FaBook, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMenu } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashboardLayout = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] px-5 py-5">
        <div className="text-center py-5">
          <h3 className="text-2xl font-bold uppercase">bistro boss</h3>
          <h4 className="text-xl uppercase font-semibold tracking-widest">
            restaurant
          </h4>
        </div>
        <ul className="flex-col gap-8 uppercase">
          <li className="flex items-center gap-3 py-3">
            <AiFillHome />

            <NavLink to="/dashboard/admin">Admin Home</NavLink>
          </li>
          <li className="flex items-center gap-3 py-3">
            <FaShoppingCart />

            <NavLink to="cart">My Cart ({cart?.length})</NavLink>
          </li>
          <li className="flex items-center gap-3  py-3">
            <ImSpoonKnife />
            <NavLink to="/add-tems">Add Items</NavLink>
          </li>
          <li className="flex items-center gap-3  py-3">
            <TfiMenuAlt />
            <NavLink to="/manage-items">Manage Items</NavLink>
          </li>
          <li className="flex items-center gap-3  py-3">
            <FaBook />
            <NavLink to="/manage-bookings">Manage Bookings</NavLink>
          </li>
          <li className="flex items-center gap-3  py-3">
            <TbUsersGroup />
            <NavLink to="/users">All Users</NavLink>
          </li>

          <div className="border border-white my-5"></div>
          <li className="flex items-center gap-3 py-3">
            <AiFillHome />

            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="flex items-center gap-3 py-3">
            <IoMdMenu />

            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="flex items-center gap-3 py-3">
            <GiShoppingBag />

            <NavLink to="/orders/salads">Shop</NavLink>
          </li>
          <li className="flex items-center gap-3 py-3">
            <FaEnvelope />

            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="px-28  bg-[#A1A1A1] w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
