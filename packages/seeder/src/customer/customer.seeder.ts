import { CustomerModel } from "./customer.model";

const customers = [
  {
    id: "192b570f-b47e-4cdd-b245-7ecb1ed229db",
    name: "John",
    phone: "01750755102",
    password: "$2b$10$wiuqR/80CBVcL7bIbLRzteLqc6szrrIV6qBJtDjZj4511V5250i/.",
    addresses: [
      {
        firstName: "Md.",
        lastName: "Asaduzzaman",
        addressLine1:
          "Flat- 5A, House- 14, Road- 08, Rupnagar Abashik R/A, Mirpur-2, Dhaka-1216",
        isDefault: false,
        addressLine2:
          "Flat- 5A, House- 14, Road- 08, Rupnagar Abashik R/A, Mirpur-2, Dhaka-1216",
        state: "Dhaka",
        postCode: "1216",
        phone: "01750755102",
        tag: "Office",
        id: "69e28377-3558-401d-9737-938ed453a084",
      },
    ],
  },
  {
    id: "8284626c-efba-4200-813c-73a87c82782e",
    name: "Smith",
    email: "test1@gmail.com",
    password: "$2b$10$oSk64xLawVJrhOtNWXxi2ezp.AagBkvhXgvUSlJSvfh/qRfxfSknW",
    addresses: [
      {
        firstName: "John",
        lastName: "Smith",
        addressLine1: "address 1",
        isDefault: false,
        addressLine2: "Address 2",
        state: "Dhaka",
        postCode: "1216",
        phone: "8801750755102",
        tag: "Home",
        id: "a0c1a054-6bd4-4362-b565-e91235dc6087",
      },
    ],
  },
  {
    id: "7367ee15-6843-465b-acc4-405b0dcbc5f9",
    name: "Asad",
    phone: "01750755103",
    password: "$2b$10$UDfQ7y7eBOX0gmmBQzsNF.1wta1QK24stHJb5ARIaHwow2cjfZ3Pa",
    addresses: [],
  },
  {
    id: "6c2e0faf-f82d-4bb7-af50-a618a351c60d",
    name: "Shad",
    phone: "01750755104",
    password: "$2b$10$LtTwejzkYdOhZzWFzE7sHOju5FbFbZvykwB6OWgd/RfWcOWT.uIN6",
    addresses: [],
  },
];

const seed = async () => {
  await CustomerModel.collection.drop();
  await CustomerModel.insertMany(customers);
  console.log("Completed Customer Data seeding");
};

export { seed };
