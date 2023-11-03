import { IMenuItem, IMobileType } from "@/types/menu-d-type";

// 
export const menu_data: IMenuItem[] = [
  {
    id: 2,
    link: "/shop",
    title: "Shop",
    icon: '/img/logo/logo.jpeg',
  },
];

// mobile menu data
export const mobile_menu: IMobileType[] = [
  {
    id: 1,
    title: "Home",
    single_link: true,
    link: "/",
  },
  {
    id: 2,
    sub_menu: true,
    title: "Products",
    link: "/shop",
    sub_menus: [
      { title: "Shop", link: "/shop" },
      { title: "Only Categories", link: "/shop-categories" },
    ],
    
  },
 
];
