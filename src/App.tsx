import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Courses from './route/Courses';
import Exams from './route/Exams';
import Index from './route/Index';
import Cours from './route/Cours';

const App: React.FC = () => {
  return (
    <div >
      <Router>
        <Switch>
        <Route path="/course/:id" component={Cours}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/exams" component={Exams}/>
          <Route path="/" component={Index}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
