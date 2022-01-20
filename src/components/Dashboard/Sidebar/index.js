import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// Routes
import { routes } from "routes/Dashboard";

import "./styles.scss";

export const SidebarDashboard = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { role } = JSON.parse(localStorage.getItem("userInfo")) || {};
  const renderRoutes = () => {
    var copyRoutes = [...routes];

    if (role === "sucursalWorker") {
      copyRoutes = copyRoutes.filter((route) => route.onlyAdmin === false);
    }

    return copyRoutes.map((route, index) => {
      return (
        <div
          className={`sidebar__item ${
            pathname.split("/").filter((item) => item !== "")[1] ==
            route.path.split("/").filter((item) => item !== "")[1]
              ? "sidebar__item__active"
              : ""
          }`}
          key={index}
          onClick={() => history.push(route.pathWithoutParams)}
        >
          <div className="sidebar__item__icon">{route.icon}</div>
          <p>{route.label}</p>
        </div>
      );
    });
  };
  return <div className="sidebar__dashboard">{renderRoutes()}</div>;
};
