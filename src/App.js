import React from 'react'
import Home from './UI Components/Home'
import Projects from './UI Components/Projects'
import Contact from './UI Components/Contact'
// import Minecraft from './UI Components/Minecraft'
import Travel from './UI Components/Travel'
// import Feedback from './UI Components/Feedback'
import { Navbar } from "./UI Components/Navbar"
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import ScrollToTop from './UI Components/ScrollToTop'

export class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
			<ScrollToTop>
				<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
				<Route path='/' component={Navbar} />
				<div className="App">
					<Route exact path='/' component={Home} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/contact' component={Contact} />
					{/* <Route exact path='/minecraft' component={Minecraft} /> */}
					<Route exact path='/travel' component={Travel} />
					{/* <Route exact path='/feedback' component={Feedback} /> */}
				</div>
			</ScrollToTop>
			</BrowserRouter>
		);
	}
}