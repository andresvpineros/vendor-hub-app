import { matchRoutes, useLocation } from "react-router-dom";
import { routes } from "@/utils/constants/routes.constant";
import type { BreadcrumbProps } from "antd";

export function useBreadcrumbItems(): BreadcrumbProps["items"] {
  const location = useLocation();
  const matches = matchRoutes(routes, location) || [];

  const items = matches.map((match) => ({
    title: match.route.title,
  }));

  return items;
}
