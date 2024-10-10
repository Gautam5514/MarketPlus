import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // Handle input changes for the signup form
  const handleSignup = (e) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onClickHandle = async (e) => {
    e.preventDefault();
    console.log(login);

    // Reset form fields after submission
    setLogin({
      name: "",
      email: "",
      password: "",
    });
    await axios
      .post("http://localhost:3000/login", login) // sending login directly

      .then((result) => {
        console.log(result);
        const token = result.data.token;
        if (token) {
          localStorage.setItem("token", token);
          toast.success("Login Successful");
          navigate("/home");
        } else {
          alert("Can't login successful");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const divStyle = {
    backgroundImage: `url('/images/home2.jpg')`,
    height: "600px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Add this line
    display: "flex", // Add this line
    justifyContent: "center", // Add this line
    alignItems: "center", // Add this line
};

  return (
    <section style={divStyle}>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-4 rounded w-45 shadow sagars text-dark">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          {/* Email input field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              onChange={handleSignup}
              name="email"
              value={login.email}
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              id="email"
            />
          </div>

          {/* Password input field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              onChange={handleSignup}
              name="password"
              value={login.password}
              placeholder="Enter Password"
              autoComplete="off"
              className="form-control rounded-0"
              id="password"
            />
          </div>

          {/* Signup button */}
          <button
            className="btn btn-dark w-100 rounded-0"
            onClick={onClickHandle}
          >
            Log IN
          </button>
        </form>

        {/* Link to login */}
        <p className="text-center mt-3 mb-2">Do not Have an Account</p>
        <Link to={"/signup"} className="btn w-100 btn-light rounded-0">
          SignIN
        </Link>
      </div>
    </div>
    </section>
  );
};

export default Login;
