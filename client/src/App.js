import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Examen from './route/Examen';
import Index from './route/Index';
import Cours from './route/Cours';
import Quiz from './route/Quiz';
import CoursAlphabet from './route/CoursAlphabet';
import CoursChiffres from './route/CoursChiffres';
import CoursAnimaux from './route/CoursAnimaux';
import QuizChiffres from './route/QuizNombres';
import QuizAnimaux from './route/QuizAnimaux';

const App = () => {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/cours" component={Cours}/>
          <Route path="/exams" component={Examen}/>
          <Route path="/quiz" component={Quiz}/>
          <Route path="/coursChiffres" component={CoursChiffres}/>
          <Route path="/coursAlphabet" component={CoursAlphabet}/>
          <Route path="/coursAnimaux" component={CoursAnimaux}/>
          <Route path="/quizChiffres" component={QuizChiffres}/>
          <Route path="/quizAnimaux" component={QuizAnimaux}/>
          <Route path="/" component={Index}/>

        </Switch>
      </Router>
    </div>
  );
} 

export default App;
