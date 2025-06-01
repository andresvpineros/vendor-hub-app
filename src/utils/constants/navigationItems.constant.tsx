import {
  LineChartOutlined,
  ShopOutlined,
  ProductOutlined,
  HomeOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const navigationItems: MenuItem[] = [
  {
    key: "/home",
    icon: <HomeOutlined className="menu-icon" />,
    label: "Inicio",
  },
  {
    type: "divider",
  },
  {
    key: "/products",
    icon: <ProductOutlined />,
    label: "Mis productos",
  },
  {
    key: "/orders",
    icon: <ShopOutlined />,
    label: "Ventas",
  },
  {
    key: "/dashboard",
    icon: <LineChartOutlined />,
    label: "Metricas",
  },
  {
    type: "divider",
  },
  {
    key: "/settings",
    icon: <SettingOutlined />,
    label: "Configuración",
  },
  {
    key: "/login",
    icon: <LogoutOutlined />,
    label: "Cerrar sesión",
  },
];
