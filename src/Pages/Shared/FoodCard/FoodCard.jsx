import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        email: user.email,
        name,
        image,
        recipe,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: `${item.name} has been added to the cart`,
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login before add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };
  return (
    <div className="px-5">
      <div className="card card-compact bg-gray-100 rounded-none">
        <figure>
          <img className="w-full" src={image} alt={name} />
        </figure>
        <h2 className="text-white bg-slate-900 text-xl font-bold text-center absolute top-3 right-3 p-2">
          ${price}
        </h2>
        <div className="card-body text-center">
          <h2 className="text-3xl text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="text-center mt-4">
            <button
              onClick={() => handleCart(item)}
              className="btn bg-gray-200 text-[#BB8506] hover:bg-gray-800 mb-5"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
