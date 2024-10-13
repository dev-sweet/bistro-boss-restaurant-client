import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure you want admin this user?",
      text: "If you confirmed make admin then this user will be an admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          //   if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "User has been updated.",
            icon: "success",
          });
          refetch();
          //   }
        });
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-10">
        MANAGE ALL USERS
      </h1>
      <div className="bg-white  p-10">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold">Total Users: {users.length}</h3>
        </div>
        <div className="overflow-x-auto mt-7">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] rounded py-10">
              <tr className="text-white">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <button
                        disabled
                        className="btn text-xl bg-[#D1A054] btn-xs text-white pb-6 pt-2 px-3 flex items-center justify-center"
                      >
                        <RiAdminFill />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn text-xl bg-[#D1A054] btn-xs text-white pb-6 pt-2 px-3 flex items-center justify-center"
                      >
                        <PiUsersThreeFill />
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
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
export default AllUsers;
