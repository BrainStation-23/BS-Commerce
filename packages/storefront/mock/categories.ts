export const categoriesData = [
  {
    id: '112',
    name: 'Fruits',
    slug: 'slug123',
    published: true,
    displayOrder: 0,
    ancestors: {
      name: 'none',
      slug: 'none',
      level: 0,
    },
  },
  {
    name: 'Electronics',
    published: true,
    displayOrder: 0,
    id: 'a0661daa-fc41-4d31-bc8b-590a413dd891',
    ancestors: [],
    slug: 'electronics',
  },
  {
    name: 'Fashon',
    published: true,
    displayOrder: 0,
    id: 'fe3cf5ca-dfe0-4fa2-a4b3-b05a751c8692',
    ancestors: [],
    slug: 'fashon',
    subCategories: [
      {
        name: 'Man-Fashon',
        slug: 'man-fashon',
        published: true,
        displayOrder: 0,
        id: '5189ad69-ff3f-4745-96d9-4655c3dcb172',
        ancestors: [
          {
            name: 'Fashon',
            slug: 'fashon',
            level: 1,
          },
        ],
        subCategories: [
          {
            name: 'T-shirt',
            slug: 't-shirt',
            published: true,
            displayOrder: 0,
            id: '19102c5a-5d5c-41e4-84e8-95e2ca116165',
            ancestors: [
              {
                name: 'Fashon',
                slug: 'fashon',
                level: 1,
              },
              {
                name: 'Man-Fashon',
                slug: 'man-fashon',
                level: 2,
              },
            ],
          },
          {
            name: 'Shirt',
            published: true,
            displayOrder: 0,
            id: 'd0acbb82-341e-4086-b2e9-bb0517533000',
            ancestors: [
              {
                name: 'Fashon',
                slug: 'fashon',
                level: 1,
              },
              {
                name: 'Man-Fashon',
                slug: 'man-fashon',
                level: 2,
              },
            ],
            slug: 'shirt',
          },
          {
            name: 'Polo t-shirt',
            published: true,
            displayOrder: 0,
            id: 'cc8f4609-7f22-4314-a655-ad80cf0d1b31',
            ancestors: [
              {
                name: 'Fashon',
                slug: 'fashon',
                level: 1,
              },
              {
                name: 'Man-Fashon',
                slug: 'man-fashon',
                level: 2,
              },
            ],
            slug: 'polo-t-shirt',
          },
          {
            name: 'Hat',
            published: true,
            displayOrder: 0,
            id: '40ede522-5ae7-4aa7-b42a-2d07063a83c4',
            ancestors: [
              {
                name: 'Fashon',
                slug: 'fashon',
                level: 1,
              },
              {
                name: 'Man-Fashon',
                slug: 'man-fashon',
                level: 2,
              },
            ],
            slug: 'hat',
          },
          {
            name: 'Hat1',
            published: true,
            displayOrder: 0,
            id: '5c39eaa0-2292-4262-ab53-b064e4bee201',
            ancestors: [
              {
                name: 'Fashon',
                slug: 'fashon',
                level: 1,
              },
              {
                name: 'Man-Fashon',
                slug: 'man-fashon',
                level: 2,
              },
            ],
            slug: 'hat1',
            subCategories: [
              {
                name: 'Hat-child',
                published: true,
                displayOrder: 0,
                id: 'aa78ae27-7732-4f97-a4df-e33667699d84',
                ancestors: [
                  {
                    name: 'Fashon',
                    slug: 'fashon',
                    level: 1,
                  },
                  {
                    name: 'Man-Fashon',
                    slug: 'man-fashon',
                    level: 2,
                  },
                  {
                    name: 'Hat1',
                    slug: 'hat1',
                    level: 3,
                  },
                ],
                slug: 'hat-child',
              },
              {
                name: 'Hat-child1',
                published: true,
                displayOrder: 0,
                id: '7a29d181-4f4b-48af-872d-6b131123ed2c',
                ancestors: [
                  {
                    name: 'Fashon',
                    slug: 'fashon',
                    level: 1,
                  },
                  {
                    name: 'Man-Fashon',
                    slug: 'man-fashon',
                    level: 2,
                  },
                  {
                    name: 'Hat1',
                    slug: 'hat1',
                    level: 3,
                  },
                ],
                slug: 'hat-child1',
              },
              {
                name: 'Hat-child12',
                published: true,
                displayOrder: 0,
                id: 'd1a60cef-6aec-4d4c-b034-29a2ff3cd05e',
                ancestors: [
                  {
                    name: 'Fashon',
                    slug: 'fashon',
                    level: 1,
                  },
                  {
                    name: 'Man-Fashon',
                    slug: 'man-fashon',
                    level: 2,
                  },
                  {
                    name: 'Hat1',
                    slug: 'hat1',
                    level: 3,
                  },
                ],
                slug: 'hat-child12',
              },
            ],
          },
        ],
      },
      {
        name: 'Woman-Fashon',
        slug: 'woman-fashon',
        published: true,
        displayOrder: 0,
        id: 'c6822101-b545-4619-b6a2-da14f60f0b21',
        ancestors: [
          {
            name: 'Fashon',
            slug: 'fashon',
            level: 1,
          },
        ],
      },
    ],
  },
  {
    name: 'CatsM',
    photo: {
      url: '',
      alt: '',
    },
    published: false,
    displayOrder: 0,
    id: 'a4fd1a04-62e1-41ff-83f0-d965c1a57520',
    ancestors: [],
    slug: 'cats',
  },
  {
    name: 'newNew',
    photo: {
      url: '',
      alt: '',
    },
    published: false,
    displayOrder: 0,
    id: 'b0912845-61d5-4423-81d9-833775230fe1',
    ancestors: [],
    slug: 'newnew',
  },
];
