import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectRoute() {
  const token = localStorage.getItem("token");
  return token? <Outlet/> : <Navigate to={"/"}/>
  
}

export default ProtectRoute;
