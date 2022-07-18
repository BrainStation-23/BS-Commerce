import { TagsModel } from "./tags.model";

const tags = [
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        name: "phone"
    },
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        name: "realme"
    }, {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        name: "smartphone"
    },
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        name: "samsung"
    },
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        name: "oppo"
    },
    {
        id: "33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727",
        name: "apple"
    }
];

const seed = async () => {
    await TagsModel.collection.drop();
    await TagsModel.insertMany(tags);
    console.log('Completed Tags Data seeding');
};

export { seed }; 