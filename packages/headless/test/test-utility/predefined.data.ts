export const TestTimeout = 30 * 1000;

export const adminData = {
    id: '33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727',
    firstName: 'John',
    lastName: 'Doe',
    displayName: 'John Doe',
    username: 'johndoe@gmail.com',
    email: 'johndoe@gmail.com',
    password: '$2b$10$kkgek0Jew5ooU6le1XsLluvakefv/AS5pRaAGE/oWImWgCG6sUBN6', // Plain Password is 'admin@123'
    provider: 'local',
};

export const customerData = {
    id: '574c0c31-e4cd-470b-a652-f964fb437b49',
    email: 'jamesrobert@gmail.com',
    password: '$2b$10$sb2uobqrj35xTlXqc1nree./fI5qYasjbQPx6ioeJH0GdTjAUCE/e', //plain password is 'customer@123'
    name: 'Robert James',
};

export const productData = {
    id: '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e',
    info: {
        name: 'Realme 6 pro',
        shortDescription: 'Short Description',
        fullDescription: 'Long Description',
        sku: 'DH1',
        price: 20000,
        oldPrice: 18000,
        cost: 20000,
        showOnHomePage: true,
        includeInTopMenu: true,
        allowToSelectPageSize: true,
        published: true,
        displayOrder: 1,
        isFeatured: true,
    },
    meta: {
        keywords: ['realme', 'phone'],
        title: 'Realme 6 Pro',
        description: 'meta description',
        friendlyPageName: 'realme-6-pro',
    },
    tags: ['phone', 'realme', 'smartphone'],
    photos: [{
        url: 'http://localhost:3000/src/public/assets/2022/6/18/realme.jpg',
        id: '5f1eca7e-010f-4114-91a0-e63d9553f908',
        title: 'Product Image',
        alt: 'Product Image',
        displayOrder: 1
    }],
    brands: ['Realme', 'SmartPhone'],
    manufacturer: {
        id: '5f1eca7e-010f-4114-91a0-e63d95533456',
        name: 'China'
    },
    categories: [{
        id: '4f336ccd-e172-44b6-b5c1-15b61c3ef000',
        name: 'Realme',
    }],
};

// admin testing data
export const TestAdminId = '33d9cad4-b68d-4fc9-ac61-e0f7e5ba2727';
export const TestAdminUsername = 'johndoe@gmail.com';

// customer testing data
export const TestCustomerId = '574c0c31-e4cd-470b-a652-f964fb437b49';
export const TestCustomerEmail = 'jamesrobert@gmail.com';

// product testing data
export const TestProductId = '6e9fb5dc-a3ad-4d35-81d2-16fc6e2dc54e';
