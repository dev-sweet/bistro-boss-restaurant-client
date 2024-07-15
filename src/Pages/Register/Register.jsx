import img from "../../assets/others/authentication2.png";
import bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-row-reverse gap-16">
          <div className="text-center lg:text-left w-2/4">
            <img className="w-full" src={`${img}`} alt="" />
          </div>
          <div className="card w-2/4 shrink-0 shadow-2xl w-[400px] py-5">
            <h1 className="text-3xl text-center font-bold mt-5">Sign Up</h1>
            <form className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054] text-white">Sign Up</button>
              </div>
            </form>
            <div>
              <p className="text-[#D1A054] text-center mt-3">
                Already registered?
                <Link className="font-bold" to="/login">
                  {" "}
                  Go to Login
                </Link>
              </p>
              <p className="text-center">Or sign up with</p>
              <div className="mt-5 flex items-center justify-around gap-10 w-2/5 mx-auto">
                <Link
                  className="flex items-center justify-center border-2 border-gray-600 rounded-full p-2"
                  to="/"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  className="flex items-center justify-center border-2 border-gray-600 rounded-full p-2"
                  to="/"
                >
                  <FaGoogle />
                </Link>
                <Link
                  className="flex items-center justify-center border-2 border-gray-600 rounded-full p-2"
                  to="/"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
