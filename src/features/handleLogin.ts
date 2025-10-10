import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Simulate API call (replace with real API later)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Logged in successfully!");
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleLogin };
};

