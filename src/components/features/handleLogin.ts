import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    console.log("Logging in with", email, password); // Placeholder for actual login logic

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // On successful login:
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // You can handle login errors here, e.g., by setting an error state
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleLogin };
};
