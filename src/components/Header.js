import React from "react";

const Header = ({ title }) => {
  return (
    <div className={`bg-warning w-100 align-self-start p-4`}>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;
