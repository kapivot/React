import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css'; // Custom styles

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem('rememberEmail') || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(!!localStorage.getItem('rememberEmail'));
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.getElementById('emailInput')?.focus();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post("https://falsafa.pythonanywhere.com/api/signin", formData);

      if (response.data.user) {
        toast.success("Welcome back to HomeGlow! ✨", { position: 'top-center' });

        if (rememberMe) {
          localStorage.setItem('rememberEmail', email);
        } else {
          localStorage.removeItem('rememberEmail');
        }

        setTimeout(() => navigate('/'), 1500);
      } else {
        toast.error(response.data.Message || "Invalid credentials", { position: 'top-center' });
      }
    } catch (error) {
      toast.error(error.response?.data?.Message || "Something went wrong!", { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page d-flex justify-content-center align-items-center">
      <ToastContainer />
      <div className="signin-card card p-5 shadow-lg bg-white rounded animate__animated animate__fadeInDown">
        <h2 className="text-center mb-4 brand-text">HomeGlow Sign In</h2>

        <form onSubmit={submit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              id="emailInput"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-3 position-relative">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className="toggle-password"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              id="rememberMeCheck"
            />
            <label className="form-check-label" htmlFor="rememberMeCheck">
              Remember Me
            </label>
          </div>

          <button type="submit" className="btn btn-glow w-100" disabled={loading}>
            {loading ? (
              <div className="spinner-border spinner-border-sm text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <p>New to HomeGlow?</p>
          <Link to="/signup" className="btn btn-outline-dark">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
