import React from "react";

const Nav = ({ onLogout }) => {
  return (
    <div className="nav">
      <div className="logo">SisRepo</div>
      <button onClick={onLogout}>Sair</button>
    </div>
  );
};

export default Nav;
