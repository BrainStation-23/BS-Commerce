import { TagsModel } from "./tags.model";

const tags = [
  {
    id: "ac9e4447-4762-457c-8fb3-f6daed54faa2",
    name: "breakfast",
    isHomePageProductsTag: false,
  },
  {
    id: "5e461fe9-2f0e-4520-8126-cd2da215bd5f",
    name: "lunch",
    isHomePageProductsTag: false,
  },
  {
    id: "d7d7f43c-4ec9-4ca0-a96f-a36310467f9e",
    name: "evening snacks",
    isHomePageProductsTag: false,
  },
  {
    id: "aa61e0f3-d47e-49ec-8b7a-21b2256d43f2",
    name: "dinner",
    isHomePageProductsTag: false,
  },
  {
    id: "40723f05-2ce7-45b6-9db7-11d07e7bf977",
    name: "Device",
    isHomePageProductsTag: false,
  },
];

const seed = async () => {
  await TagsModel.collection.drop();
  await TagsModel.insertMany(tags);
  console.log("Completed Tags Data seeding");
};

export { seed };
