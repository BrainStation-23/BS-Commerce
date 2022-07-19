import { BrandModel } from "./brand.model";
const brands = [
    {
        id: 'ed1b4494-875b-40c3-853c-dfc0776ccd62',
        info: {
            name: 'Samsung',
            description: 'Samsung Products',
            allowToSelectPageSize: false,
            published: true,
            displayOrder: 0,
            pageSizeOptions: []
        },
        meta: {
            keywords: 'keywords',
            description: 'description',
            title: 'title',
            SEFN: 'SEFN'
        }
    }
];

const seed = async () => {
    await BrandModel.collection.drop();
    await BrandModel.insertMany(brands);
    console.log('Completed Brand Data seeding');
};

export { seed };