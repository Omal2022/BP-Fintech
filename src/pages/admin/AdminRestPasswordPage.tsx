import React from "react";
import Inputs from "../../components/UI/Inputs";
import AdminNavbar from "../../components/UI/AdminNavbar";

const AdminRestPasswordPage: React.FC = () => {
  return (
    <>
      <section className="form-section lg:flex lg:flex-col lg:relative">
        <div
          className="lg:absolute lg:top-0 
      absolute top-0"
        >
          <AdminNavbar />
        </div>
        <div className="resetPassword-container">
          <h3>Reset password</h3>
          <p className="mb-12 lg:mb-11 md:mb-9">
            Give us your email address, we’ll send a code to verify your account
          </p>
          <Inputs
            email=""
            password=""
            emailPlaceholder="Email address"
            button="Send Reset Code"
            forgotPassword={false}
            showEmail={true}
            showPassword={false}
            showActionButtons={true}
            className="flex flex-col gap-4 w-[300px] lg:flex lg:flex-col lg:gap-4 lg:w-[400px]"
          />
        </div>
      </section>
    </>
  );
};

export default AdminRestPasswordPage;
