// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { user } = useAuth();
  const profilePath = user?.role === "ngo" ? "/profile/ngo" : "/profile/donor";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar profilePath={profilePath} />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="min-w-0 flex-1 p-3 sm:p-4 md:p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
