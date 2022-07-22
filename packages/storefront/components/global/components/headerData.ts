interface menuLink {
  name: string;
  link: object;
  hasSubmenu: boolean;
  submenu?: subLink[];
}

interface subLink {
  name: string;
  link: string;
}

export const MenuData: menuLink[] = [
  {
    name: 'home',
    link: { pathname: '/' },
    hasSubmenu: true,
    submenu: [
      { name: 'Home - 1', link: '/' },
      { name: 'Home - 2', link: '/' },
      { name: 'Home - 3', link: '/' },
    ],
  },
  {
    name: 'shop',
    link: { pathname: '/' },
    hasSubmenu: true,
    submenu: [
      { name: 'Cucumber', link: '/' },
      { name: 'Papaya', link: '/' },
      { name: 'Mango', link: '/' },
    ],
  },
  {
    name: 'product',
    link: { pathname: '/' },
    hasSubmenu: true,
    submenu: [
      { name: 'Simple Product', link: '/' },
      { name: 'Variable Product', link: '/' },
      { name: 'Affiliate Product', link: '/' },
    ],
  },
  { name: 'blog', link: { pathname: '/' }, hasSubmenu: false },
  {
    name: 'pages',
    link: { pathname: '/' },
    hasSubmenu: true,
    submenu: [
      { name: 'About Us', link: '/about' },
      { name: 'Service', link: '/service' },
      { name: 'FAQ', link: '/faq' },
    ],
  },
  { name: 'contact', link: { pathname: '/contact' }, hasSubmenu: false },
];
