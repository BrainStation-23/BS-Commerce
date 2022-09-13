export const categories = [{
  "_id": {
    "$oid": "62c56b2aa4c2691025889d82"
  },
  "name": "Electronics",
  "description": "string",
  "photo": {
    "url": "string",
    "alt": "string"
  },
  "showOnHomePage": true,
  "includeInTopMenu": true,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 1,
  "rootPath": "",
  "meta": {
    "keywords": [
      "string"
    ],
    "description": "string",
    "title": "string",
    "SEFN": "string"
  },
  "id": "a72242de-51ea-4b54-bdb9-7a22c1537692",
  "ancestors": [],
  "slug": "electronics"
},{
  "_id": {
    "$oid": "62c56b3da4c2691025889d84"
  },
  "name": "Vegetable",
  "description": "string",
  "photo": {
    "url": "string",
    "alt": "string"
  },
  "showOnHomePage": true,
  "includeInTopMenu": true,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 1,
  "rootPath": "",
  "meta": {
    "keywords": [
      "string"
    ],
    "description": "string",
    "title": "string",
    "SEFN": "string"
  },
  "id": "3988ce23-4e6f-4362-a369-ffa4b19c42da",
  "ancestors": [],
  "slug": "vegetable"
},{
  "_id": {
    "$oid": "62d78a6a6f294417518ada7d"
  },
  "name": "phone",
  "description": "string",
  "photo": {
    "url": "string",
    "alt": "string"
  },
  "showOnHomePage": true,
  "includeInTopMenu": true,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "electronics",
  "meta": {
    "keywords": [
      "string"
    ],
    "description": "string",
    "title": "string",
    "SEFN": "string"
  },
  "id": "2c620053-3792-4fd4-9ec0-0b7c379dc22a",
  "ancestors": [
    {
      "name": "Electronics",
      "slug": "electronics",
      "level": 1
    }
  ],
  "slug": "phone"
},{
  "_id": {
    "$oid": "62d78a8e6f294417518ada80"
  },
  "name": "Nokia",
  "description": "string",
  "photo": {
    "url": "string",
    "alt": "string"
  },
  "showOnHomePage": true,
  "includeInTopMenu": true,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "electronics/phone",
  "meta": {
    "keywords": [
      "string"
    ],
    "description": "string",
    "title": "string",
    "SEFN": "string"
  },
  "id": "dfb54b13-6985-468b-9df3-1d36a7664eb8",
  "ancestors": [
    {
      "name": "Electronics",
      "slug": "electronics",
      "level": 1
    },
    {
      "name": "phone",
      "slug": "phone",
      "level": 2
    }
  ],
  "slug": "nokia"
},{
  "_id": {
    "$oid": "627dfd13db02f8240294a426"
  },
  "name": "Apple Watch Child",
  "slug": "apple-watch-child",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "electronics/digital-watch",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "b6d2ef52-495b-4e13-984f-838a7eee3bbb",
  "ancestors": [
    {
      "name": "Electronics",
      "slug": "electronics",
      "level": 1
    },
    {
      "name": "Digital Watch",
      "slug": "digital-watch",
      "level": 2
    }
  ]
},{
  "_id": {
    "$oid": "627dfd2cdb02f8240294a429"
  },
  "name": "Apple watch grandchild",
  "slug": "apple-watch-grandchild",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "electronics/digital-watch/apple-watch-child",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "08fc3545-8f9d-41a5-8c66-9c8fe372560a",
  "ancestors": [
    {
      "name": "Electronics",
      "slug": "electronics",
      "level": 1
    },
    {
      "name": "Digital Watch",
      "slug": "digital-watch",
      "level": 2
    },
    {
      "name": "Apple Watch Child",
      "slug": "apple-watch-child",
      "level": 3
    }
  ]
},{
  "_id": {
    "$oid": "627dfd50db02f8240294a42c"
  },
  "name": "Apple Watch  Grand Grand Child",
  "slug": "apple-watch-grand-grand-child",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "electronics/digital-watch/apple-watch-child/apple-watch-grandchild",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "70acae3d-32e4-41ae-8f69-f52bd679aa54",
  "ancestors": [
    {
      "name": "Electronics",
      "slug": "electronics",
      "level": 1
    },
    {
      "name": "Digital Watch",
      "slug": "digital-watch",
      "level": 2
    },
    {
      "name": "Apple Watch Child",
      "slug": "apple-watch-child",
      "level": 3
    },
    {
      "name": "Apple Watch GrandChild",
      "slug": "apple-watch-grandchild",
      "level": 4
    }
  ]
},{
  "_id": {
    "$oid": "6284d683604ced77e914c99b"
  },
  "name": "Apple Watch extra feature",
  "slug": "apple-watch-extra-feature",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "electronics/digital-watch/apple-watch-child/apple-watch-grandchild",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "f5be2dd7-6784-46d2-813a-4ecfe929831a",
  "ancestors": [
    {
      "name": "Electronics",
      "slug": "electronics",
      "level": 1
    },
    {
      "name": "Digital Watch",
      "slug": "digital-watch",
      "level": 2
    },
    {
      "name": "Apple Watch Child",
      "slug": "apple-watch-child",
      "level": 3
    },
    {
      "name": "dipu Bala",
      "slug": "apple-watch-grandchild",
      "level": 4
    }
  ]
},{
  "_id": {
    "$oid": "62a25dc4a0089338ba36df78"
  },
  "name": "Fashon",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "fe3cf5ca-dfe0-4fa2-a4b3-b05a751c8692",
  "ancestors": [],
  "slug": "fashon"
},{
  "_id": {
    "$oid": "62a25e1fa0089338ba36df7b"
  },
  "name": "Man-Fashon",
  "slug": "man-fashon",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "5189ad69-ff3f-4745-96d9-4655c3dcb172",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    }
  ]
},{
  "_id": {
    "$oid": "62a26260816d21e7c4c7a37a"
  },
  "name": "Woman-Fashon",
  "slug": "woman-fashon",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "c6822101-b545-4619-b6a2-da14f60f0b21",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    }
  ]
},{
  "_id": {
    "$oid": "62a32990754bde6d4a740e12"
  },
  "name": "T-shirt",
  "slug": "t-shirt",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "19102c5a-5d5c-41e4-84e8-95e2ca116165",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    }
  ]
},{
  "_id": {
    "$oid": "62a730b23dc23a83cbfd81dc"
  },
  "name": "Shirt",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "d0acbb82-341e-4086-b2e9-bb0517533000",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    }
  ],
  "slug": "shirt"
},{
  "_id": {
    "$oid": "62a732cef09993b3fa8d0670"
  },
  "name": "Polo t-shirt",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "cc8f4609-7f22-4314-a655-ad80cf0d1b31",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    }
  ],
  "slug": "polo-t-shirt"
},{
  "_id": {
    "$oid": "62a74f9e08e500a41552d263"
  },
  "name": "Hat",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "40ede522-5ae7-4aa7-b42a-2d07063a83c4",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    }
  ],
  "slug": "hat"
},{
  "_id": {
    "$oid": "62a74fca3c62049bbfbaa75f"
  },
  "name": "Hat1",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "5c39eaa0-2292-4262-ab53-b064e4bee201",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    }
  ],
  "slug": "hat1"
},{
  "_id": {
    "$oid": "62a74ffe3c62049bbfbaa762"
  },
  "name": "Hat-child",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon/hat1",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "aa78ae27-7732-4f97-a4df-e33667699d84",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    },
    {
      "name": "Hat1",
      "slug": "hat1",
      "level": 3
    }
  ],
  "slug": "hat-child"
},{
  "_id": {
    "$oid": "62a7501e46d362c18557ee88"
  },
  "name": "Hat-child1",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon/hat1",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "7a29d181-4f4b-48af-872d-6b131123ed2c",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    },
    {
      "name": "Hat1",
      "slug": "hat1",
      "level": 3
    }
  ],
  "slug": "hat-child1"
},{
  "_id": {
    "$oid": "62a75168eec96ee14cc0cc01"
  },
  "name": "Hat-child12",
  "description": null,
  "imageId": null,
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": true,
  "published": true,
  "displayOrder": 0,
  "rootPath": "fashon/man-fashon/hat1",
  "meta": {
    "keywords": [],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "d1a60cef-6aec-4d4c-b034-29a2ff3cd05e",
  "ancestors": [
    {
      "name": "Fashon",
      "slug": "fashon",
      "level": 1
    },
    {
      "name": "Man-Fashon",
      "slug": "man-fashon",
      "level": 2
    },
    {
      "name": "Hat1",
      "slug": "hat1",
      "level": 3
    }
  ],
  "slug": "hat-child12"
},{
  "_id": {
    "$oid": "6318276c5a87dfdfb5bfbe12"
  },
  "name": "Fruits & Vegetables",
  "description": "",
  "photo": {
    "url": "",
    "alt": ""
  },
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": false,
  "published": false,
  "displayOrder": 0,
  "rootPath": "",
  "meta": {
    "keywords": [
      ""
    ],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "b6c70c16-1384-4023-98f2-f7e8d1e98bbd",
  "ancestors": [],
  "slug": "fruits-&-vegetables"
},{
  "_id": {
    "$oid": "63183594c77d451193198b04"
  },
  "name": "Fruits",
  "description": "",
  "photo": {
    "url": "",
    "alt": ""
  },
  "showOnHomePage": false,
  "includeInTopMenu": false,
  "allowToSelectPageSize": false,
  "published": false,
  "displayOrder": 0,
  "rootPath": "fruits-&-vegetables",
  "meta": {
    "keywords": [
      ""
    ],
    "description": "",
    "title": "",
    "SEFN": ""
  },
  "id": "b73b7a9f-f48f-418b-8224-a99beaf18be5",
  "ancestors": [
    {
      "name": "Fruits & Vegetables",
      "slug": "fruits-&-vegetables",
      "level": 1
    }
  ],
  "slug": "fruits"
}]