import { useState } from "react";
import Inputs from "../../components/UI/Inputs";
import Loader from "../../components/UI/Loader";
import "../../App.css";
import { useLogin } from "../../components/features/handleLogin";
import { type ValidationErrors } from "../../types/auth";
import { validateInputs } from "../../utils/validation";
import AdminNavbar from "../../components/UI/AdminNavbar";

const simulateError = false;

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const { loading, handleLogin } = useLogin();

  const onSubmit = () => {
    const validationErrors = validateInputs(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Proceed with login
    handleLogin({ email, password });
  };

  if (loading) return <Loader />;

  return (
    <section className="form-section lg:flex lg:flex-col lg:relative">
      <div
        className="lg:absolute lg:top-0 
      absolute top-0"
      >
        <AdminNavbar />
      </div>
      <div className="login-container">
        <h3 className="">Welcome Back</h3>
        <p className="mb-12 lg:mb-11 md:mb-9">Login to your BPay account</p>

        <Inputs
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          forgotPassword={true}
          showEmail={true}
          showPassword={true}
          showActionButtons={true}
          buttonFunc={onSubmit}
          className="flex flex-col gap-4 w-[300px] lg:flex lg:flex-col lg:gap-4 lg:w-[400px]"
        />
      </div>

      <div className="text-red-500 text-sm mt-2">
        {errors.email && <p>{errors.email}</p>}
        {errors.password && <p>{errors.password}</p>}
      </div>

      {/* Simulate an error to test Error Boundary */}
      {simulateError &&
        (() => {
          throw new Error("Simulated test error");
        })()}
    </section>
  );
};

export default AdminLoginPage;
