import React, { useState } from "react";
import Inputs from "../../components/Inputs";
import Loader from "../../components/Loader";
import "../../App.css";
import { useLogin } from "../../features/handleLogin";

const AdminLoginPage = () => {
  const { loading, handleLogin } = useLogin();

  if (loading) return <Loader />;
 if (loading) return <Loader />;
 
  return (
    <>
      <section className="form-section">
        <div className="login-container">
          <h3>Welcome Back</h3>
          <p>Login to your BPay account</p>

          <Inputs
            email=""
            password=""
            forgotPassword={true}
            showEmail={true}
            showPassword={true}
            showActionButtons={true}
            buttonFunc={handleLogin}
            className="flex flex-col gap-4 w-[400px]"
          />
        </div>
      </section>
    </>
  );
};

export default AdminLoginPage;
