import React from "react";

function Header({ title, subtitle }) {
  return (
    <header className="p-4">
      <h1 className="text-4xl font-bold mt-3s">{title}</h1>
      <h2 className="italic text-xl mt-4 tracking-wide">{subtitle}</h2>
    </header>
  );
}

export default Header;
