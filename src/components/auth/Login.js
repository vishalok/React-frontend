// src/LoginPage.js
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye and eye-slash icons
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Set playback speed to 2x
    }
  }, []);

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordError || !password) {
      alert('Please enter a valid password.');
    } else {
      alert('Login successful!');
      navigate('/dashboard'); 
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef} // Attach the ref to the video element
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/video/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag. Check if the video URL is correct.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Container for the login card */}
      <div className="relative z-10 w-full max-w-sm p-4">
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-white">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block mb-2 text-white">Password</label>
              <input
                type={showPassword ? 'password' : 'text'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute  right-2 top-10 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
          {/* Signup Link */}
          <div className="mt-4 text-center">
            <p className="text-white">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
