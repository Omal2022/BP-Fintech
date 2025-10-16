import "../../App.css"

import { type InputsProps } from "../../types/components";

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
  onEmailChange,
  onPasswordChange,
  buttonFunc,
  className,
}: InputsProps) => {
  return (
    <div className={className}>
      {showEmail && (
        <>
          <label htmlFor="emailLabel" className="font-Graphik">
            {emailLabel}:
          </label>
          <input
            id="emailInput"
            type="email"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => onEmailChange?.(e.target.value)}
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
            id="passwordInput"
            type="password"
            placeholder={passwordPlaceholder}
            value={password}
            onChange={(e) => onPasswordChange?.(e.target.value)}
            className="font-Graphik border border-gray-300 rounded-md p-2"
          />
        </>
      )}

      {showActionButtons && (
        <>
          {forgotPassword && (
            <p>
              <a href="/admin/reset">Forgot Password?</a>
            </p>
          )}
          <button
            onClick={buttonFunc}
            className="font-Graphik border border-gray-300 rounded-md p-2 bg-[#007AFF] text-white hover:bg-[#005BB5]  transition-colors cursor-pointer"
          >
            {button}
          </button>
        </>
      )}
    </div>
  );
};

export default Inputs;
