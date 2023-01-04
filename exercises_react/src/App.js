import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Exercise Tracker</h1>
        <p>This app allows you to add exercises to track</p>
      </header>
      <Router>
        <div className="App-header">
        <Navigation />
		  <Routes>
          <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
          <Route path="/add-exercise" element={<AddExercisePage />}/>
          <Route path="/edit-exercise" element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
		  </Routes>
          </div>
      </Router>
      <footer>
        <p> &copy; 2022 Marc Campagnolo</p>
      </footer>
    </div>
  );
}

export default App;