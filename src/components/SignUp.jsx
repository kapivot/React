import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'; // Custom styling for decor/furniture aesthetic

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    emailjs.init('XKQeAilQN_jwiHS3-');
  }, []);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validatePhone = (num) => /^\d{10,15}$/.test(num);

  const submit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number (10-15 digits)", { position: "top-center" });
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post("https://falsafa.pythonanywhere.com/api/signup", data);
      toast.success(response.data.Success || "Account created successfully!", { position: "top-center" });

      // Send email to admin
      await emailjs.send(
        'service_rrubs0b',
        'template_2hmpby5',
        {
          user_name: username,
          user_email: email,
          user_phone: phone
        },
        'XKQeAilQN_jwiHS3-'
      );

      // Clear form
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "An error occurred.", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='signup-page'>
      <ToastContainer />
      <div className='signup-card shadow-lg'>
        <h2 className='text-center mb-4 brand-title'>Create Your Glow Account</h2>

        <form onSubmit={submit}>
          <div className="form-group mb-3">
            <label>Username</label>
            <input type="text" className='form-control' placeholder='Enter Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input type="email" className='form-control' placeholder='Enter Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group mb-3 position-relative">
            <label>Password</label>
            <input type={showPassword ? "text" : "password"} className='form-control' placeholder='Enter Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <span onClick={togglePasswordVisibility} className="toggle-password">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-group mb-4">
            <label>Phone</label>
            <input type="tel" className='form-control' placeholder='Enter phone number' required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          <button type='submit' className='btn btn-glow w-100' disabled={loading}>
            {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"><span className="visually-hidden">Loading...</span></div> : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p>Already have an account?</p>
          <Link to='/signin' className='btn btn-outline-glow'>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
