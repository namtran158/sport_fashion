import { MenuNavbar } from "./menu-link.type";

export const MENU_NAVBAR: MenuNavbar[] = [
  {
    name: "trang chủ",
    isSubMenu: false,
  },
  {
    name: "giày",
    isSubMenu: true,
    subMenu: [
      {
        name: "giày nike",
        path: "/abc",
        isSubMenu: true,
        subMenu: [
          { name: "nike air force 1", path: "/xxx" },
          { name: "nike air max", path: "/" },
          { name: "nike element", path: "/" },
          { name: "nike court", path: "/" },
        ],
      },
      {
        name: "giày jordan",
        path: "/",
        isSubMenu: true,
        subMenu: [
          { name: "Dior x Nike Air Jordan 1", path: "/" },
          { name: "Casual shirts", path: "/" },
          { name: "formal shirts", path: "/" },
        ],
      },
      {
        name: "giày bitishuner",
        path: "/",
        isSubMenu: true,
        subMenu: [
          { name: "T-shirt", path: "/" },
          { name: "Casual shirts", path: "/" },
          { name: "formal shirts", path: "/" },
        ],
      },
    ],
  },
  {
    name: "quần áo",
    isSubMenu: true,
    subMenu: [
      {
        name: "no thing",
        path: "/",
        isSubMenu: true,

        subMenu: [
          { name: "t-shirt", path: "/" },
          { name: "sasual shirts", path: "/" },
          { name: "special-shirt", path: "/" },
        ],
      },
      {
        name: "giày nike",
        path: "/",
        isSubMenu: true,
        subMenu: [
          { name: "nike air force 1", path: "/" },
          { name: "nike air max", path: "/" },
          { name: "nike element", path: "/" },
          { name: "nike court", path: "/" },
        ],
      },
      {
        name: "wow",
        path: "/",
        isSubMenu: true,
        subMenu: [
          { name: "T-shirt", path: "/" },
          { name: "Casual shirts", path: "/" },
          { name: "formal shirts", path: "/" },
        ],
      },
      {
        name: "hehe boys",
        path: "/",
        isSubMenu: true,
        subMenu: [
          { name: "T-shirt", path: "/" },
          { name: "Casual shirts", path: "/" },
          { name: "formal shirts", path: "/" },
        ],
      },
    ],
  },
  {
    name: "phụ kiện",
    isSubMenu: true,
    subMenu: [
      {
        name: "phụ kiện bóng rổ",
        path: "/",
        isSubMenu: false,
      },
      {
        name: "phụ kiện bóng đá",
        isSubMenu: false,
        path: "/",
      },
      {
        name: "phụ kiện bóng chày",
        isSubMenu: false,
        path: "/",
      },
    ],
  },
];
