import { lazy } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

const Login = lazy(() =>
  import(/*webpackChunkName:'LoginPage'*/ "@/pages/Login").then((module) => {
    return { default: module.default };
  })
);

const Users = lazy(() =>
  import(/*webpackChunkName:'AboutPage'*/ "@/pages/Users").then((module) => {
    return { default: module.default };
  })
);

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Router;
