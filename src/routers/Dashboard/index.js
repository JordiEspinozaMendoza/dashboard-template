import React, { useEffect } from "react";
// * React router dom stuff
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "routes/Dashboard";
// * Components
import { SidebarDashboard } from "components";
import "./styles.scss";
import { DashboardNavbar } from "components/Dashboard";
import { useHistory } from "react-router-dom";

export const DashboardRouter = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    const dashboardContent = document.getElementById("dashboard__content");
    if (dashboardContent) {
      // get the first child of the dashboard content
      if (dashboardContent.firstElementChild) {
        dashboardContent.firstElementChild.scrollIntoView();
      }
    }
  }, [pathname, history]);
  return (
    <div className="dashboard__router">
      <SidebarDashboard />
      <React.Suspense
        fallback={
          <div id="loader__dashboard">
            <h1>Loading...</h1>
          </div>
        }
      >
        <div className="dashboard__content">
          <DashboardNavbar />
          <div id="dashboard__content">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <route.component {...props} />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
};
