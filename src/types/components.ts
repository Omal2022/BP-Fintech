import type { ReactNode } from "react";

export interface ButtonProps {
  btnFunc?: () => void;
  bgColor?: string;
  txColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  clsName?: string;
  children?: ReactNode;
  width?: string | number;
  height?: string | number;
  display?: string;
  justifyContent?: string;
  alignItems: string;
  gap?: string | number;
  flexDirection?: string;
}

export interface InputsProps {
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
  onEmailChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
  className?: string;
}

export interface NavItem {
  href: string;
  img: string;
  label: string;
  color?: boolean;
}
