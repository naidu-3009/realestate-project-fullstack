import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
<div className='p-3 max-w-lg mx-auto'>
  <div className='bg-white p-6 rounded-lg shadow-md flex flex-col h-full'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form className='flex flex-col gap-4 flex-grow'>
      <input type="text" placeholder='username' className='border p-3 rounded-lg focus:outline-none' id='username' />
      <input type="text" placeholder='email' className='border p-3 rounded-lg focus:outline-none' id='email' />
      <input type="password" placeholder='password' className='border p-3 rounded-lg focus:outline-none' id='password' />
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
    </form>
    <div className="flex justify-center mt-5">
      <p>Already have an account?</p>
      <Link to={"/Signin"}>
        <span className='text-blue-700 ml-2 cursor-pointer'>Sign in</span>
      </Link>
    </div>
  </div>
</div>



  )
}
