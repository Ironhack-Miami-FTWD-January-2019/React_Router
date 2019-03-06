import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
import Education from './components/Education'
import Experience from './components/Experience'
import {projects as Projects} from './components/Projects';
import ProjectDetails from './components/ProjectDetails'
import experience from './components/Experience';



class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <button onClick={this.toggleLogin}>Login</button>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/aboutme' component={About} />
          <Route path='/education' component={Education} />
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />

        </Switch>



      </div>
    );
  }
}

export default App