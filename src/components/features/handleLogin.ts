import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { type LoginCredentials } from "../../types/auth";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 const handleLogin = async ({ email, password }: LoginCredentials) => {
    setLoading(true);
    console.log("Logging in with", email, password); 

    // Simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // On successful login:
       localStorage.setItem("isLoggedIn", "true");
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
