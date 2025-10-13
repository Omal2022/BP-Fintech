import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginCredentials } from "../../types/auth";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: LoginCredentials) => {
    setLoading(true);
    console.log("Logging in with", email, password);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleLogin };
};
