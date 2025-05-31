import DashboardPage from "../../pages/dashboard/DashboardPage";
import LoginPage from "../../pages/auth/LoginPage";
import NavigationLayout from "@/components/NavigationLayout/NavigationLayout";
import HomePage from "@/pages/home/HomePage";
import ProductsPage from "@/pages/products/ProductsPage";
import OrdersPage from "@/pages/orders/OrdersPage";
import SettingsPage from "@/pages/settings/SettingsPage";

export const routes = [
  {
    element: <NavigationLayout />,
    children: [
      {
        path: "/home",
        index: true,
        element: <HomePage />,
        title: "Inicio",
      },
      {
        path: "/products",
        index: true,
        element: <ProductsPage />,
        title: "Mis productos",
      },
      {
        path: "/orders",
        index: true,
        element: <OrdersPage />,
        title: "Ventas",
      },
      {
        path: "/dashboard",
        index: true,
        element: <DashboardPage />,
        title: "Metricas",
      },
      {
        path: "/settings",
        index: true,
        element: <SettingsPage />,
        title: "Configuración",
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    title: "Login",
  },
];
