import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointments from './component/Appointments/Appointments/Appointments';
import Home from './component/Home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/appointments" component={Appointments} />
      </Switch>
    </Router>
  );
};

export default App;
