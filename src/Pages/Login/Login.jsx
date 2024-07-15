import img from "../../assets/others/authentication2.png";
import bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
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
        <div className="hero-content flex gap-16">
          <div className="text-center lg:text-left w-2/4">
            <img className="w-full" src={`${img}`} alt="" />
          </div>
          <div className="card w-2/4 shrink-0 shadow-2xl w-[400px] py-5">
            <h1 className="text-3xl text-center font-bold mt-5">Login</h1>
            <form className="card-body pb-0">
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
                <div className="form-control pt-5">
                  <input
                    type="text"
                    className="input input-bordered border-xl bg-red"
                    value="XbuYnK"
                  />
                </div>
                <button className="btn btn-sm max-w-[#20px] text-blue-600 text-lg">
                  Reload Captha
                </button>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054] text-white">Sign In</button>
              </div>
            </form>
            <div>
              <p className="text-[#D1A054] text-center mt-3">
                New here?{" "}
                <Link className="font-bold" to="/signup">
                  {" "}
                  Create a New Account
                </Link>
              </p>
              <p className="text-center">Or sign in with</p>
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

export default Login;
