import React from "react";
import Inputs from "../../components/UI/Inputs";
import AdminNavbar from "../../components/UI/AdminNavbar";
const simulateError = false;

const AdminNewPassword: React.FC = () => {
  return (
    <>
      <section className="form-section flex flex-col relative">
        
      <div className="absolute top-0">
        <AdminNavbar/>
      </div>
        <div className="newPassword-container ">
          <h3>Admin New Password</h3>
          <Inputs
            password=""
            showEmail={false}
            showPassword={true}
            showActionButtons={false}
          />
          <Inputs
            password=""
            button="Save Password"
            showEmail={false}
            showPassword={true}
            showActionButtons={true}
          />
        </div>

        {/* Simulate an error to test Error Boundary */}
        {simulateError &&
          (() => {
            throw new Error("Simulated test error");
          })()}
      </section>
    </>
  );
};

export default AdminNewPassword;
