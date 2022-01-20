import { useHistory } from "react-router-dom";
import "./styles.scss";

export const DashboardNavbar = () => {
  const history = useHistory();
  return (
    <div className="dashboard__navbar">
      <p className="dashboard__navbar__title">Dashboard</p>
      <p
        className="dashboard__navbar__subtitle"
        onClick={() => {
          localStorage.removeItem("userInfo");
          history.push("/");
        }}
      >
        Cerrar sesión
      </p>
    </div>
  );
};
