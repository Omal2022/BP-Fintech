import React from "react";
import Inputs from "../../components/Inputs";

const AdminRestPasswordPage: React.FC = () => {
  return (
    <>
      <section className="form-section">
        <div className="resetPassword-container">
          <h3>Reset password</h3>
          <p>
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
            className="flex flex-col gap-4 w-[400px]"
          />
        </div>
      </section>
    </>
  );
};

export default AdminRestPasswordPage;
