import "../styles/pages/signup.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Navbar } from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
export const Signup = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  // Used to Show/Hide Passwords
  const [passwordType, setPasswordType] = useState({
    password: "password",
    confirmPassword: "password",
  });

  const editSignupForm = useRef(null);
  const handleSignupForm = (e) => {
    e.preventDefault();
    const form = editSignupForm.current;
    if (form["passwordField"].value === form["confirmPasswordField"].value) {
      signUpHandler({
        firstName: form["firstName"].value,
        lastName: form["lastName"].value,
        email: form["emailId"].value,
        password: form["passwordField"].value,
      });
      editSignupForm.current.reset();
    } else {
      toast.error("Passwords Do Not Match!!");
    }
  };

  const signUpHandler = async (signUpData) => {
    try {
      const response = await axios.post(`/api/auth/signup`, signUpData);
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      setAuth({ ...auth, token: response.data.encodedToken, isLoggedIn: true });
      toast.success("Sign up Successful!!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Server Error", error);
    }
  };

  return (
    <div className="Signup Pages">
      <Navbar />
      {/* Main Container */}
      <form
        ref={editSignupForm}
        className="signup-container flex-column-center mg-top-sm mg-bottom-sm"
        onSubmit={handleSignupForm}
      >
        <div className="signup-card">
          {/* Heading */}
          <h2 className="text-center mg-xsm">Signup</h2>
          {/* Full-Name */}
          <div className="full-name-item flex-column mg-xsm fw-bold">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="firstName"
              className="mg-bottom-xsm"
              id="first-name"
              required
            />
            <label htmlFor="last-name" className="mg-y-xsm">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="mg-bottom-xsm"
              id="last-name"
              required
            />
          </div>
          {/* Email-id */}
          <div className="email-id-item mg-xsm flex-column fw-bold">
            <label htmlFor="email-id" className="mg-bottom-xsm">
              Email ID
            </label>
            <input
              type="email"
              name="emailId"
              id="email-id"
              className="mg-bottom-xsm"
              required
            />
          </div>
          {/* <!-- Password --> */}
          <div className="password-item mg-xsm flex-column fw-bold">
            <label htmlFor="password" className="mg-bottom-xsm">
              Password
            </label>
            <input
              type={passwordType.password}
              name="passwordField"
              id="password-field"
              className="mg-bottom-xsm password-field"
              minLength="8"
              required
            />
            <i
              className="material-icons signup-pwd-show-icon"
              onClick={() =>
                setPasswordType((passwordType) =>
                  passwordType.password === "password"
                    ? { ...passwordType, password: "text" }
                    : { ...passwordType, password: "password" }
                )
              }
            >
              {passwordType.password === "password"
                ? "visibility_off"
                : "visibility"}
            </i>
          </div>
          {/* Confirm Password */}
          <div className="confirm-password-item mg-xsm flex-column fw-bold">
            <label htmlFor="confirm-password" className="mg-bottom-xsm">
              Confirm Password
            </label>
            <input
              type={passwordType.confirmPassword}
              name="confirmPasswordField"
              id="confirm-password"
              className="mg-bottom-xsm"
              minLength="8"
              required
            />
            <i
              className="material-icons signup-pwd-show-icon"
              onClick={() =>
                setPasswordType((passwordType) =>
                  passwordType.confirmPassword === "password"
                    ? { ...passwordType, confirmPassword: "text" }
                    : { ...passwordType, confirmPassword: "password" }
                )
              }
            >
              {passwordType.confirmPassword === "password"
                ? "visibility_off"
                : "visibility"}
            </i>
          </div>
          {/* Terms & Condition */}
          <div className="terms-item mg-xsm fw-bold align-center">
            <input
              type="checkbox"
              className="mg-xsm"
              name="tickTerms"
              id="terms"
              required
            />
            <label htmlFor="terms">I accept all Terms & Conditions*</label>
          </div>
          {/* Buttons */}
          <button
            href=""
            className="btn btn-solid fw-bold primary-bg-color"
            type="submit"
          >
            Create New Account
          </button>
          <Link to="/login" className="btn btn-outline-icon fw-bold">
            Already have an account?
            <i className="material-icons">chevron_right</i>
          </Link>
        </div>
      </form>
    </div>
  );
};
