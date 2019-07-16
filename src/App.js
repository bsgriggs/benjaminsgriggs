import React from 'react'
import Home from './UI Components/SubHeader/Home'
import Skill from './UI Components/SubHeader/Skill'
import Project from './UI Components/SubHeader/Project'
import Minecraft from './UI Components/Minecraft'
import { Navbar } from "./UI Components/Navbar"
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

export class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Route path='/' component={Navbar} />
				<div className="App">
					<Route exact path='/' component={Home} />
					<Route exact path='/skill' component={Skill} />
					<Route exact path='/project' component={Project} />
					<Route exact path='/minecraft' component={Minecraft} />
				</div>
			</BrowserRouter>
		);
	}
}