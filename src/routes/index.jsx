import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Drivers from "../pages/Drivers";
import DriverDetail from "../pages/DriverDetail";
import Teams from "../pages/Teams";

export const route = {
  home: "/",
  drivers: "/drivers",
  driverDetail: "/drivers/:id",
  teams: "/teams",
};

const createRoute = (path, element) => ({
  path,
  element,
});

const defaultRoute = {
  path: "/",
  element: <Layout />,
};

export const paths = [
  {
    ...defaultRoute,
    children: [
      createRoute(route.home, <Home />),
      createRoute(route.drivers, <Drivers />),
      createRoute(route.driverDetail, <DriverDetail />),
      createRoute(route.teams, <Teams />),
    ],
  },
];

export const routes = createBrowserRouter(paths);
