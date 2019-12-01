import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import ExercisesList from "./component/ExercisesList";
import EditExercise from "./component/EditExercise";
import CreateExercise from "./component/CreateExercise";
import CreateUser from "./component/CreateUser";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
