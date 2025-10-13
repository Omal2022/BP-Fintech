import React from "react";
import { BeatLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <BeatLoader color="#2563eb" size={15} />
    </div>
  );
};

export default Loader;
