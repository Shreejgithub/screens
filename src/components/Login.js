import React from 'react'

const Login = () => {
  return (
    <div className="bg-cyan-700">
   
    <div className="flex items-center justify-center min-h-screen bg-white ">
      <img className="w-2/4 h-auto ml-16" src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=826" alt="Login" />
      <div className="bg-gray-400 shadow-2xl rounded-md p-8 w-96 mx-auto box-border h-96 w-82 mt-5 mr-64 cyan-700">
        <div className="text-center mb-6">
          <p className="text-xl font-semibold text-blue-900">Login</p>
        </div>
        <br></br>
        <form action="../../index3.html" method="post">
          <div className="mb-4">
            <input type="email" className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input type="password" className="form-input w-full px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="form-checkbox h-5 w-5 text-blue-500" />
              <label htmlFor="remember" className="ml-2 text-sm">Remember Me</label>
            </div>
            <div>
              <a href="#" className="text-sm text-white hover:underline">Forgot Password?</a>
            </div>
            <br></br>
          </div>
          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-md transition duration-300 hover:bg-blue-900">Sign In</button>
        </form>
        
      </div>
    </div>
         
    </div>
  )
}

export default Login
