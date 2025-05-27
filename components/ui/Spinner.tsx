import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-12 w-12 border-b-4 border-indigo-500 rounded-full animate-spin " />
    </div>
  );
};

export default Spinner;
