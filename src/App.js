import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointments from './component/Appointments/Appointments/Appointments';
import Dashboard from './component/Dashboard/Dashboard';
import Home from './component/Home/Home';
import AdminRoute from './component/Login/AdminRoute';
import Login from './component/Login/Login';
import PrivateRoute from './component/Login/PrivateRoute';
import Notfound from './component/NotFound/Notfound';
import useAuth from './hooks/useAuth';

const App = () => {
  const { isAdmin } = useAuth();
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Login} />
          <AdminRoute path="/dashboard" component={isAdmin ? Dashboard : Notfound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
