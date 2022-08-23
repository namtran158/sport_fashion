import { ComponentType, LazyExoticComponent } from "react";

export interface Route {
  path: string;
  protectRoute?: boolean;
  component?: ComponentType | LazyExoticComponent<any>;
  children?: Route[];
}

