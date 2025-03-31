import React from 'react'
import SignUp from './SignUp'

const Login = () => {
  return (
    <div>
      <SignUp />    
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" required />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
        </p>
        <p className="text-center mt-4">
          <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
        </p>
        <p className="text-center mt-4">
          <a href="/reset-password" className="text-blue-500">Reset Password</a>
        </p>
        <p className="text-center mt-4">
          <a href="/logout" className="text-blue-500">Logout</a>
        </p>
        <p className="text-center mt-4">
          <a href="/profile" className="text-blue-500">Profile</a>
        </p>
        <p className="text-center mt-4">
          <a href="/settings" className="text-blue-500">Settings</a>
        </p>
        <p className="text-center mt-4">
          <a href="/about" className="text-blue-500">About</a>
        </p>
        <p className="text-center mt-4">
          <a href="/contact" className="text-blue-500">Contact</a>
        </p>
        <p className="text-center mt-4">
          <a href="/privacy" className="text-blue-500">Privacy Policy</a>
        </p>
        <p className="text-center mt-4">
          <a href="/terms" className="text-blue-500">Terms of Service</a>
        </p>
        <p className="text-center mt-4">
          <a href="/help" className="text-blue-500">Help</a>
        </p>
        <p className="text-center mt-4">
          <a href="/support" className="text-blue-500">Support</a>
        </p>
    </div>
  )
}

export default Login