import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Pedidos from "./Pages/Dashboard/Pedidos";
import { AuthProvider } from "./Auth";
import Agendamento from './Pages/Dashboard/Agendamento';
import Calendar from "./PrivateRoute";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  document.title = "React Firebase Authentication"
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/agendamento" component={Agendamento} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
