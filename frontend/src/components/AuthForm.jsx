import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const userCred = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      onLogin(userCred.user); // pass user to App
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent.");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-lg max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold text-white text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="text-sm text-white text-center">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-400 underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>

      <p className="text-center">
        <button
          type="button"
          onClick={handleReset}
          className="text-sm text-blue-400 underline"
        >
          Forgot Password?
        </button>
      </p>

      {message && <p className="text-red-400 text-center text-sm">{message}</p>}
    </form>
  );
};

export default AuthForm;
