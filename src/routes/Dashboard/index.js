import { lazy } from "react";

const Home = lazy(() => import("views/Home"));
export const routes = [
  {
    path: "/",
    pathWithoutParams: "/",
    exact: true,
    component: Home,
    label: "Inicio",
    icon: <i className="fas fa-home" />,
    onlyAdmin: false,
  },
];
