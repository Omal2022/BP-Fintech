import React from "react";

import { type ButtonProps } from "../../types/components";

const Button = ({
  btnFunc,
  bgColor = "gray",
  padding,
  margin,
  txColor,
  border,
  clsName,
  children,
  width,
  height,
  display,
  justifyContent,
  alignItems,
  gap,
  flexDirection,
}: ButtonProps) => {
  const styles = {
    btn: {
      backgroundColor: bgColor,
      color: txColor || "white",
      padding: padding || "10px 20px",
      margin: margin || "5px",
      border: border || "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      width,
      height,
      display: display as React.CSSProperties["display"],
      justifyContent: justifyContent as React.CSSProperties["justifyContent"],
      alignItems: alignItems as React.CSSProperties["alignItems"],
      gap: gap as React.CSSProperties["gap"],
      flexDirection: flexDirection as React.CSSProperties["flexDirection"],
    },
  };

  return (
    <button onClick={btnFunc} style={styles.btn} className={clsName}>
      {children || "Click me"}
    </button>
  );
};

export default Button;
