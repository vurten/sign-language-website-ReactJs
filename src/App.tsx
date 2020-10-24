import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Cours from './route/Cours';
import Quizz from './route/Quizz';
import Index from './route/Index';

const App: React.FC = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/cours" component={Cours}/>
          <Route path="/quizz" component={Quizz}/>
          <Route path="/" component={Index}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
