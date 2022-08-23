import React from "react";
import { Route } from "../../services/route/route.type";

export const authRoutes: Route[] = [
  {
    path: "login",
    component: React.lazy(() => import("src/pages/auth/login")),
  },
  {
    path: "register",
    component: React.lazy(() => import("src/pages/auth/register")),
  },
];
