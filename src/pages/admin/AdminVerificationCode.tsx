import React from "react";
import Inputs from "../../components/UI/Inputs";

const AdminVerificationCode: React.FC = () => {
  return (
    <>
      <section className="form-section">
        <div className="verificationCode-container">
          <h3>Admin Verification Code</h3>
          <Inputs
            email=""
            password=""
            emailLabel="Verification Code"
            emailPlaceholder="Enter Code"
            button="Verify Code"
            forgotPassword={false}
            showEmail={true}
            showPassword={false}
            showActionButtons={true}
          />
        </div>
      </section>
    </>
  );
};

export default AdminVerificationCode;
