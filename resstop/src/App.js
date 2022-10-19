
import './App.css';
import { Router, Link, Route, Switch } from 'react-router-dom';

import Banner from "./components/Banner.component"
// import ExercisesList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";

function App() {
  return (
    <div className="container">
      <center>
        <div className="heading">
          <span className="Res">Thimmappa</span><span className="Stop">Stop</span>
          <div className='SubHead'>if you wanna have vegetarian, you can go fuck yourself</div>
        </div>
            <div className="myDiv">
            
            {/* <span class='img'>
              <img src='https://vitospizza.com/wp-content/uploads/2020/05/vitos-white-01-1024x543.png' width="140" height="70"></img>
            </span> */}
              <h2>Random Da Dhaba</h2>
              <span className="rect"></span>
              <p>Indian  Chinese  Mughlai</p>
              <span className="rating">4.5</span>
              
            </div>

            <div className="myDiv">
              <h2>Random Da Dhaba</h2>
              <span className="rect"></span>
              <p>Indian  Chinese  Mughlai</p>
              <span className="rating">4.5</span>
            </div>

            <div className="myDiv">
              <h2>Random Da Dhaba</h2>
              <span className="rect"></span>
              <p>Indian  Chinese  Mughlai</p>
              <span className="rating">4.5</span>
            </div>
      </center>
    </div>
  );
}

export default App;

function rest_1(){
  return <h1>Vitos</h1>
}

function rest_2(){
  return <h1>Saiba</h1>
}

function rest_3(){
  return <h1>Kyoto</h1>
}