import React from "react";
import { Route } from "src/services/route/route.type";
import { authRoutes } from "./auth-route";

export const appRoutes: Route[] = [
  { path: "auth", children: authRoutes },
  {
    path: "",
    component: React.lazy(() => import("src/pages/landing-page")),
  },
  {
    path: "product",
    children: [
      {
        path: "",
        component: React.lazy(() => import("src/pages/product/list")),
      },
      {
        path: "detail/:id",
        component: React.lazy(() => import("src/pages/product/detail")),
      },
    ],
  },
  {
    path: "cart",
    component: React.lazy(() => import("src/pages/cart")),
  },
  {
    path: "checkout",
    component: React.lazy(() => import("src/pages/payment-check")),
  },
  {
    path: "*",
    component: React.lazy(() => import("src/pages/not-found")),
  },
];
