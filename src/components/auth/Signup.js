import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Set playback speed to 2x
    }
  }, []);

  // Mock function to check if username exists (replace with API call)
  const checkUsernameExists = (username) => {
    const existingUsers = ['admin', 'user1', 'johnDoe']; // Mock data for existing users
    return existingUsers.includes(username);
  };

  // Real-time username validation
  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (checkUsernameExists(newUsername)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username already exists.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { username, ...remainingErrors } = prevErrors; // Remove username error
        return remainingErrors;
      });
    }
  };

  // Real-time email validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!isValidEmail(newEmail)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...remainingErrors } = prevErrors; // Remove email error
        return remainingErrors;
      });
    }
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Real-time password validation
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!isValidPassword(newPassword)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...remainingErrors } = prevErrors; // Remove password error
        return remainingErrors;
      });
    }
  };

  // Password validation regex
  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Real-time confirm password validation
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { confirmPassword, ...remainingErrors } = prevErrors; // Remove confirmPassword error
        return remainingErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Final validation on form submit
    if (checkUsernameExists(username)) {
      formErrors.username = 'Username already exists.';
    }

    if (!isValidEmail(email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    if (!isValidPassword(password)) {
      formErrors.password = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol.';
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(formErrors).length === 0) {
      // Submit form
      console.log('Signup successful!');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
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

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-sm p-4">
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Username</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type={passwordVisible ? 'password' : 'text' }
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-9 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type={confirmPasswordVisible ? 'password' : 'text' }
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute inset-y-9 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
              >
                <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
              </span>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded transition duration-300 transform hover:scale-105">Sign Up</button>
            <div className="mt-4 text-center">
              <span className="text-sm text-white">Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
