import React from 'react'
import About from './UI Components/About/About'
import Skill from './UI Components/About/Skill'
import Project from './UI Components/About/Project'
import { Navbar } from "./Navbar"
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

export class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Route path='/' component={Navbar} />
				<div className="App">
					<Route exact path='/' component={About} />
					<Route exact path='/skill' component={Skill} />
					<Route exact path='/project' component={Project} />
				</div>
			</BrowserRouter>
		);
	}
}