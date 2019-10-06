import React from 'react'
import Home from './UI Components/SubHeader/Home'
import Project from './UI Components/SubHeader/Project'
import Contact from './UI Components/SubHeader/Contact'
import Minecraft from './UI Components/Minecraft'
import Travel from './UI Components/Travel'
import Feedback from './UI Components/Feedback'
import { Navbar } from "./UI Components/Navbar"
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

export class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
				<Route path='/' component={Navbar} />
				<div className="App">
					<Route exact path='/' component={Home} />
					<Route exact path='/project' component={Project} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/minecraft' component={Minecraft} />
					<Route exact path='/travel' component={Travel} />
					<Route exact path='/feedback' component={Feedback} />
				</div>
			</BrowserRouter>
		);
	}
}