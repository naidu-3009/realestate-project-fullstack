import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
      navigate('/signin')
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
          <input
            type="text"
            placeholder="username"
            className="border p-3 rounded-lg focus:outline-none"
            id="username"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            className="border p-3 rounded-lg focus:outline-none"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg focus:outline-none"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign-Up"}
          </button>
        </form>
        <div className="flex justify-center mt-5">
          <p>Already have an account?</p>
          <Link to={"/Signin"}>
            <span className="text-blue-700 ml-2 cursor-pointer">Sign in</span>
          </Link>
        </div>
        {error && <p className="text-red-700 mt-5">{error}</p>}
      </div>
    </div>
  );
}
