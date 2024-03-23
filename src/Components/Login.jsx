import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== "pistol"){
      alert("Password not correct")
      return;
    }
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      onLogin(response.data);
      navigate('/'); // Redirect to home on successful login
    } catch (error) {
      alert(error.response.data.error)
      // Handle login errors (e.g., display error message)
    }
  };

  return (
    <div className='w-full login m-auto flex justify-center align-middle'>
   <div className=' login-inner  drop-shadow-2xl rounded-lg p-5 bg-slate-300 '>
      <h1 className='text-3xl  font-semibold'>Login...</h1>
      <form onSubmit={handleSubmit}>
        <div className=''>

        <div className='flex flex-col mb-4 mt-4 '>
        <label className='text-xl font-semibold ' htmlFor="email">Email:</label>
        <input
        className='p-1  rounded'
        placeholder='Enter your email...'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className='flex flex-col  text-xl font-semibold'>
        <label htmlFor="password">Password:</label>
        <input className='p-1 rounded'
        placeholder='*************'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>

        </div>



        <button className='border px-12 py-2 mt-5 hover:bg-pink-500 font-semibold bg-black text-white' type="submit">Login</button>
      </form>
    </div>
    </div>

  );
}

export default Login;
