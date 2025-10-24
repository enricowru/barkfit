import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration attempt with email:', email);
      setIsLoading(false);
      setIsSuccess(true);
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-barkfit-gray to-barkfit-dark flex items-center justify-center p-8">
      <div className="bg-barkfit-card rounded-2xl p-12 w-full max-w-md shadow-2xl border border-gray-600">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-barkfit-gold rounded-xl flex items-center justify-center text-4xl">
              🐕
            </div>
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-2 text-shadow-lg">Join BarkFit</h1>
          <p className="text-gray-300 text-lg mb-0">Create your account to get started</p>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-6">
              <label htmlFor="email" className="block text-white font-bold mb-2 text-sm uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border-2 border-gray-500 rounded-lg bg-gray-600 text-white text-base transition-colors duration-300 focus:outline-none focus:border-barkfit-gold focus:bg-gray-500 placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full p-4 bg-barkfit-gold text-black border-none rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-yellow-300 hover:-translate-y-0.5 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4 animate-bounce">✅</div>
            <h2 className="text-green-400 text-3xl font-bold mb-4 text-shadow-sm">Registration Successful!</h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-sm mx-auto">
              Welcome to BarkFit! Your account has been created successfully. 
              You will be redirected to the home page shortly.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-3 border-gray-600 border-t-barkfit-gold rounded-full animate-spin"></div>
              <span className="text-gray-400 text-sm italic">Redirecting...</span>
            </div>
          </div>
        )}

        {!isSuccess && (
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Already have an account? 
              <Link to="/login" className="text-barkfit-gold font-bold ml-2 transition-colors duration-300 hover:text-yellow-300">
                Sign In
              </Link>
            </p>
            <Link to="/" className="text-gray-400 text-sm transition-colors duration-300 hover:text-white">
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;

