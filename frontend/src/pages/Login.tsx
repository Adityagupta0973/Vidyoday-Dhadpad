import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Logging in with:', JSON.stringify({ email, password }));
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login failed');
      }
      const data = await response.json();
      console.log('Login successful:', data.user.role);
      // Assuming backend returns { role, userName, token }
      localStorage.setItem('userRole', data.user.role);
      localStorage.setItem('userName', data.user.name);
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('token', data.token);
      navigate(`/${data.user.role}`);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }



  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: "#e9d8fd" }}>
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4">
          <img
            src="/Logo.png"
            alt="Vidyoday Logo"
            className="w-24 h-24 object-contain"
          />
        </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Vidyoday</h1>
          <p className="text-blue-600 font-medium">शिक्षा देवो भव॥</p>
        </div>

        <h2 className="text-2xl font-bold text-orange-600 text-center mb-8">Login</h2>


        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="text-red-600 text-center mb-2">{error}</div>
          )}
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Demo accounts:</p>
          <p>volunteer@test.com | teacher@test.com</p>
          <p>coordinator@test.com | admin@test.com</p>
        </div>
      </div>
    </div>
  );
};

export default Login;