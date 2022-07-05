const SubMenuIcon = <i className="bi bi-record-circle" />;
const DashboardIcon = <i className="bi bi-tv" />;
const CatalogIcon = <i className="bi bi-card-list" />;
const PromotionIcon = <i className="bi bi-tags" />;
const UsersIcon = <i className="bi bi-people-fill" />;
const SystemIcon = <i className="bi bi-box" />;
const ReportsIcon = <i className="bi bi-graph-up-arrow" />;

export interface ISidebarSubmenu {
  name: string;
  to: string;
  icon: JSX.Element;
}

export interface ISidebarData {
  id: number;
  name: string;
  to: string;
  icon: JSX.Element;
  subMenus: ISidebarSubmenu[];
}

export const SidebarData: ISidebarData[] = [
  {
    id: 0,
    name: "Dashboard",
    to: "/home",
    icon: DashboardIcon,
    subMenus: [],
  },
  {
    id: 1,
    name: "Catalog",
    to: "",
    icon: CatalogIcon,
    subMenus: [
      {
        name: "Products",
        to: "/Product",
        icon: SubMenuIcon,
      },
      {
        name: "Manufacturers",
        to: "/Manufacturer/",
        icon: SubMenuIcon,
      },
      {
        name: "Categories",
        to: "/category",
        icon: SubMenuIcon,
      },
    ],
  },
  {
    id: 2,
    name: "Promotion",
    to: "",
    icon: PromotionIcon,
    subMenus: [
      {
        name: "Discount",
        to: "/promotion/discount",
        icon: SubMenuIcon,
      },
      {
        name: "Campaign",
        to: "/promotion/campaign",
        icon: SubMenuIcon,
      },
    ],
  },
  {
    id: 3,
    name: "Users",
    to: "",
    icon: UsersIcon,
    subMenus: [
      {
        name: "Admins",
        to: "/users/admin",
        icon: SubMenuIcon,
      },
    ],
  },
  {
    id: 4,
    name: "System",
    to: "",
    icon: SystemIcon,
    subMenus: [
      {
        name: "Log",
        to: "/system/log",
        icon: SubMenuIcon,
      },
      {
        name: "Scheduled Task",
        to: "/system/scheduled-task",
        icon: SubMenuIcon,
      },
    ],
  },
  {
    id: 5,
    name: "Reports",
    to: "",
    icon: ReportsIcon,
    subMenus: [
      {
        name: "Sales Summary",
        to: "/report/sales-summary",
        icon: SubMenuIcon,
      },
      {
        name: "Registered Customers",
        to: "/report/registered-customers",
        icon: SubMenuIcon,
      },
      {
        name: "Customer by Order Numbers",
        to: "/report/customers-by-number-of-orders",
        icon: SubMenuIcon,
      },
      {
        name: "Best Customers on Total Order",
        to: "/report/best-customers-by-order-total",
        icon: SubMenuIcon,
      },
    ],
  },
];
