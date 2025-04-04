import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/pages/Home";
import Users from "../components/pages/Users";
import Profile from "../components/pages/Profile";
import AdminLayout from "../components/layouts/AdminLayout";
import UserLayout from "../components/layouts/UserLayout";
import NotFound from "../components/pages/NotFound";
import Register from "../components/pages/Register";
import IDCard from "../components/pages/IDCard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin/users"
        element={
          <AdminLayout>
            <Users />
          </AdminLayout>
        }
      />

      <Route
        path="/profile"
        element={
          <UserLayout>
            <Profile />
          </UserLayout>
        }
      />
      <Route
        path="/id-card"
        element={
          <UserLayout>
            <IDCard />
          </UserLayout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
