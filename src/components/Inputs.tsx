import React, { type ReactNode } from "react";
import "../App.css";

interface Props {
  email?: string;
  password?: string | number;
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  showEmail?: boolean;
  showPassword?: boolean;
  showActionButtons?: boolean;
  button?: string | ReactNode;
  forgotPassword?: boolean;
  buttonFunc?: () => void;
  className?: string | ReactNode;
}

const Inputs = ({
  email,
  password,
  emailLabel = "Email",
  passwordLabel = "Password",
  emailPlaceholder = "Enter your email",
  passwordPlaceholder = "Enter your password",
  showEmail,
  showPassword,
  showActionButtons,
  button = "Login",
  forgotPassword,
  buttonFunc,
  className,
}: Props) => {
  return (
    <>
      <div className={className}>
        {showEmail && (
          <>
            <label htmlFor="emailLabel" className="font-Graphik">
              {emailLabel}:
            </label>
            <input
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              className="font-Graphik border border-gray-300 rounded-md p-2"
            />
          </>
        )}

        {showPassword && (
          <>
            <label htmlFor="passwordLabel" className="font-Graphik">
              {passwordLabel}:
            </label>
            <input
              type="password"
              placeholder={passwordPlaceholder}
              value={password}
              className="font-Graphik border border-gray-300 rounded-md p-2"
            />
          </>
        )}

        {showActionButtons && (
          <>
            {forgotPassword && <p>Forgot Password?</p>}
            <button
              onClick={buttonFunc}
              className="font-Graphik border border-gray-300 rounded-md p-2 bg-[#007AFF] text-white hover:bg-[#005BB5]  transition-colors cursor-pointer"
            >
              {button}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Inputs;
