import { IMenuItem, IMobileType } from "@/types/menu-d-type";

// 
export const menu_data: IMenuItem[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/shop",
    title: "Shop",
    mega_menu: true,
    shop_mega_menus: [
      {
        link: "/shop",
        title: "Shop Pages",
        list_menus: [
          { title: "Shop", link: "/shop" },
          { title: "Shop Categories", link: "/shop-categories" },
        ],
      },
    ],
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
  {
    id: 4,
    sub_menu: true,
    title: "eCommerce",
    link: "/cart",
    sub_menus: [
      { title: "Shopping Cart", link: "/cart" },
      { title: "Compare", link: "/compare" },
      { title: "Wishlist", link: "/wishlist" },
    ],
  },
];
