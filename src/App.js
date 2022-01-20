import "./App.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DashboardRouter } from "./routers/Dashboard";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DashboardRouter} />
      </Switch>
    </Router>
  );
}

export default App;
