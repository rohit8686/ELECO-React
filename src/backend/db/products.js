import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1632948896000",
    name: "Mac book pro",
    price: 194900,
    discount: 8,
    category: "Laptops",
    rating: 4.8,
    newArrival: true,
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61R04c4iitL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Reddragon K552",
    price: 5000,
    discount: 4,
    category: "Keyboards",
    rating: 4.5,
    newArrival: false,
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY327_FMwebp_QL65_.jpg",
    name: "iphone 13",
    price: 80709,
    discount: 5,
    category: "Smart phones",
    rating: 2,
    newArrival: true,
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/71lT-zWEYkL._AC_UL480_FMwebp_QL65_.jpg",
    name: "Asus Zenbook 14",
    price: 93731,
    discount: 5,
    category: "Laptops",
    rating: 4.7,
    newArrival: false,
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY327_FMwebp_QL65_.jpg",
    name: "Canon EOS 1500D",
    price: 60497,
    discount: 5,
    category: "DSLR",
    rating: 3.4,
    newArrival: true,
  },
  {
    _id: uuid(),
    image:
      "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Logitech K380",
    price: 2255,
    discount: 8,
    category: "Keyboards",
    rating: 2,
    newArrival: false,
  },
  {
    _id: uuid(),
    image:
      "https://images.unsplash.com/photo-1613141412501-9012977f1969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Logitech G502",
    price: 4278,
    discount: 4,
    category: "Mouse",
    rating: 3.3,
    newArrival: false,
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY327_FMwebp_QL65_.jpg",
    name: "boat rockers 370",
    price: 2223,
    discount: 2,
    category: "Headphones",
    rating: 4,
    newArrival: false,
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/61xeIT6UHrL._AC_UY327_FMwebp_QL65_.jpg",
    name: "boat bassheads",
    price: 8976,
    discount: 4,
    category: "Headphones",
    rating: 1.4,
    newArrival: false,
  },
];
