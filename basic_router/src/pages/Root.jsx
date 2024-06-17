import React from "react";
import Navber from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
}
