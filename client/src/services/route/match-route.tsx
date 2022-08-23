import { Suspense } from "react";
import { Route, Routes as RoutesDom } from "react-router-dom";
import PrivateRoute from "./protect-route";

function displayRoute(
  routes: Array<any>,
  parentPath = "",
  children: Array<any> = []
) {
  routes.forEach((route: any) => {
    const { path } = route;
    const mainPath = parentPath ? parentPath + "/" + path : path;
    if (route.component) {
      if (route.protectRoute)
        children.push(
          <Route
            key={mainPath}
            path={mainPath}
            element={
              <PrivateRoute>
                <route.component />
              </PrivateRoute>
            }
          />
        );
      else
        children.push(
          <Route key={mainPath} path={mainPath} element={<route.component />} />
        );
    }
    if (route.children) {
      let configProtectChildRoute = route.children;
      if (route.protectRoute) {
        configProtectChildRoute = route.children.map((rt: any) => {
          return { ...rt, protectRoute: true };
        });
      }
      displayRoute(configProtectChildRoute, mainPath, children);
    }
  });

  return children;
}

export function MatchRoutes({ routes }: any) {
  const routing = displayRoute(routes);
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <RoutesDom>{routing}</RoutesDom>
    </Suspense>
  );
}
