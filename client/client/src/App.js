import Navbar from './component/Navbar/Navbar'
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom'
import AllRouter from './AllRoutes'
import {fetchAllQuestions} from './actions/question'
import {fetchAllUsers} from './actions/users'

function App() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRouter />
      </Router>
      </div>
  );
}

export default App;
