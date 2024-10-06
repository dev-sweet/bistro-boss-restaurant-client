import { MdDeleteOutline } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this cart item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-10">
        WANNA ADD MORE?
      </h1>
      <div className="bg-white  p-10">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold">Total Orders: {cart.length}</h3>
          <h3 className="text-3xl font-bold">Total Prices: {totalPrice}</h3>
          <button className="bg-[#D1A054] text-white px-5 py-2 rounded">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto mt-7">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] rounded py-10">
              <tr className="text-white">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={item._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn text-xl bg-[#B91C1C] btn-xs text-white pb-6 pt-2 px-3 flex items-center justify-center"
                    >
                      <MdDeleteOutline />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
