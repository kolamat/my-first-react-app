import React, { useState } from "react";
import { link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <link to="/" className="navbar-logo">
            <i class="fa-sharp fa-solid fa-p">ortFolio</i>
          </link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
