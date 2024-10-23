import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation } from "react-router-dom";
import "./styling/AuthForm.css"

function AuthForm() {

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    
    // Get the path the user was trying to access before being redirected to the login page
    // Default to home if no previous page
    const redirectPath = location.state?.from?.pathname || "/"; 

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            name: "",
            email: "",
            password: ""
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            login({ name: formData.email.split('@')[0], email: formData.email });
            navigate(redirectPath)
        } else {
            login({ name: formData.name, email: formData.email });
            navigate(redirectPath)
        }
    };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required={!isLogin}
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Your Password"
            required
          />
        </div>
        <button type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button className="toggle-btn" onClick={toggleForm}>
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </button>
    </div>
  )
}

export default AuthForm