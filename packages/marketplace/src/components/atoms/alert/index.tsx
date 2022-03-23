import React from "react";

export const Alert: React.FC<any> = ({ text }) => {
  return (
    <div className="alert alert-success" role="alert">
      A simple primary alert—check it out! {text}
    </div>
  );
};
