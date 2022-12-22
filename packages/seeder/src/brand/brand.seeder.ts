import { BrandModel } from "./brand.model";
const brands = [
  {
    id: "c0f7c43c-060b-495a-b4f3-e3f6838bdfb0",
    info: {
      name: "brandss",
      description:
        "This is a motorBike and it belongs to USA based Harley Company",
      allowToSelectPageSize: false,
      published: true,
      displayOrder: 101,
      pageSizeOptions: [1, 2],
    },
    meta: {
      keywords: "Davidson",
      description: "motorbike brand",
      title: "MotorBike 500cc",
      SEFN: "500cc",
    },
  },
  {
    id: "f84ea8e6-80dc-450d-80b2-3811193cd562",
    info: {
      name: "brands 15",
      description:
        "This is a motorBike and it belongs to USA based Harley Company",
      allowToSelectPageSize: false,
      published: true,
      displayOrder: 101,
      pageSizeOptions: [1, 2],
    },
    meta: {
      keywords: "Davidson",
      description: "motorbike brand",
      title: "MotorBike 500cc",
      SEFN: "500cc",
    },
  },
  {
    id: "5928a67b-7c80-4a68-a762-18dcc56da0ee",
    info: {
      name: "brands 5",
      description: "string",
      allowToSelectPageSize: true,
      published: true,
      displayOrder: 0,
      pageSizeOptions: [],
    },
    meta: {
      keywords: "string",
      description: "string",
      title: "string",
      SEFN: "string",
    },
  },
  {
    id: "586c9f93-52a8-40f0-be8d-c15cd11df2b4",
    info: {
      name: "brands 3",
      description: null,
      allowToSelectPageSize: false,
      published: false,
      displayOrder: 0,
      pageSizeOptions: [],
    },
    meta: {
      keywords: "",
      description: "",
      title: "",
      SEFN: "",
    },
  },
  {
    id: "b7e26f31-6e27-4f45-a778-654edf922bf3",
    info: {
      name: "brands 2",
      description: "",
      allowToSelectPageSize: false,
      published: false,
      displayOrder: 1,
      pageSizeOptions: [],
    },
    meta: {
      keywords: "",
      description: "",
      title: "",
      SEFN: "",
    },
  },
  {
    id: "2f3fa494-2c95-4c0a-b204-92662ed09d46",
    info: {
      name: "brands 1",
      description: "",
      allowToSelectPageSize: false,
      published: false,
      displayOrder: 1,
      pageSizeOptions: [],
    },
    meta: {
      keywords: "",
      description: "",
      title: "",
      SEFN: "",
    },
  },
  {
    id: "b76d2963-7f60-404b-bb0e-75a9e37f5541",
    info: {
      name: " Apple",
      description: "",
      allowToSelectPageSize: false,
      published: false,
      displayOrder: 1,
      pageSizeOptions: [],
    },
    meta: {
      keywords: "",
      description: "",
      title: "",
      SEFN: "",
    },
  },
  {
    id: "a6527573-240b-4d1a-a4be-9d28d4b4c8b5",
    info: {
      name: "Nokia",
      description: "",
      allowToSelectPageSize: false,
      published: false,
      displayOrder: 1,
      pageSizeOptions: [],
    },
    meta: {
      keywords: "",
      description: "",
      title: "",
      SEFN: "",
    },
  },
];

const seed = async () => {
  await BrandModel.collection.drop();
  await BrandModel.insertMany(brands);
  console.log("Completed Brand Data seeding");
};

export { seed };
