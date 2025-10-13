import React from "react";
import type { ButtonProps } from "../types/components";

const Button = ({
  btnFunc,
  bgColor = "gray",
  txColor,
  clsName,
  children,
  width,
  height
}: ButtonProps) => {
  const styles = {
    btn: {
      backgroundColor: bgColor,
      color: txColor || "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "5px",
      width,
      height,
    }
  };

  return (
    <button onClick={btnFunc} style={styles.btn} className={clsName}>
      {children || "Click me"}
    </button>
  );
};

export default Button;
