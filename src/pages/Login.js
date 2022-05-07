import "../styles/pages/login.css";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
export const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [passwordType, setPasswordType] = useState("password");
  const [testData, setTestData] = useState({ email: "", password: "" });

  const editLoginForm = useRef(null);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = editLoginForm.current;
    loginHandler({
      email: form["emailId"].value,
      password: form["passwordField"].value,
    });
    editLoginForm.current.reset();
  };

  const loginHandler = async (loginData) => {
    try {
      const response = await axios.post("/api/auth/login", loginData);
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      localStorage.setItem("token", response.data.encodedToken);
      toast.success("Login Success");
      setAuth({ ...auth, token: response.data.encodedToken, isLoggedIn: true });
      setTestData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="Login Pages">
      <Navbar />
      <form
        ref={editLoginForm}
        onSubmit={handleLoginForm}
        className="login-container  flex-column-center pd-y-md"
      >
        <div className="login-card">
          {/* Heading */}
          <h2 className="text-center mg-xsm">Login</h2>
          {/* Email-id */}
          <div className="email-id-item mg-xsm flex-column fw-bold">
            <label htmlFor="email-id" className="mg-bottom-xsm">
              Email address
            </label>
            <input
              type="email"
              id="email-id"
              name="emailId"
              defaultValue={testData.email}
              className="mg-bottom-xsm"
              required
            />
          </div>
          {/* Password */}
          <div className="password-item mg-xsm flex-column fw-bold">
            <label htmlFor="password" className="mg-bottom-xsm">
              Password
            </label>
            <input
              type={passwordType}
              id="password"
              name="passwordField"
              defaultValue={testData.password}
              className="mg-bottom-xsm"
              minLength="8"
              required
            />
            <i
              className="material-icons login-pwd-show-icon"
              onClick={() =>
                setPasswordType((passwordType) =>
                  passwordType === "password" ? "text" : "password"
                )
              }
            >
              {passwordType === "password" ? "visibility_off" : "visibility"}
            </i>
          </div>
          {/*  Remember Me  */}
          <div className="remember-item mg-xsm fw-bold align-center">
            <input type="checkbox" className="mg-xsm" id="remember" />
            <label htmlFor="terms">Remember Me</label>
            <Link to="/login" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          {/* Buttons */}
          <button type="submit" className="btn btn-solid fw-bold ">
            LOGIN
          </button>
          <button
            type="submit"
            className="btn btn-outline fw-bold white-color"
            onClick={() =>
              setTestData({
                email: "adarshbalika@gmail.com",
                password: "adarshBalika123",
              })
            }
          >
            Login with Test Credentials
          </button>
          <Link
            to="/signup"
            className="btn btn-outline-icon fw-bold white-color"
          >
            Create New Account<i className="material-icons">chevron_right</i>
          </Link>
        </div>
      </form>
    </div>
  );
};
