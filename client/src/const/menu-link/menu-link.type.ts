export interface MenuNavbar {
  name: string;
  path?: string;
  icon?: string;
  isSubMenu?: boolean;
  subMenu?: MenuNavbar[];
}
