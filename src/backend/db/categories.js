import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
  },
  {
    _id: uuid(),
    categoryName: "DSLR",
    image:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGRhcmslMjBjYW1lcmF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Smart phones",
    image:
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Keyboards",
    image:
      "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Mouse",
    image:
      "https://images.unsplash.com/photo-1613141412501-9012977f1969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Speakers",
    image:
      "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BlYWtlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Headphones",
    image:
      "https://images.unsplash.com/photo-1599669454515-1b2e0173f302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhlYWRwaG9uZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];