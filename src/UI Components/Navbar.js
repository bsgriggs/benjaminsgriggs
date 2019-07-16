import React from 'react'
import logo from '../imgs/BenjaminSGriggs.svg'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export class Navbar extends React.Component{
	constructor(props){
		super(props);

		console.log(this.props);

		//other methods
		this.slideNav = this.slideNav.bind(this);
	}

	slideNav(){
		const slid = document.getElementById("slider");
		slid.classList.toggle("down");
		slid.classList.toggle("up");
	}

 	//trigger exact to behavior for NavLink Benjamin Griggs when a sub NavLink is active
  	render() {
		const FirstNavActive = () => {
			const sub = this.props.location.pathname.substring(0,2);
			if (sub  === '/s' || sub ==='/a' || sub === '/p' || sub === '/c' || sub === '/')
				return true;
			return false;
		};

		return (
			<div>
				<div id="slider" className="up">
					<div className="Slider" onMouseEnter={this.slideNav} onMouseLeave={this.slideNav}>
						<NavLink exact to='/'>Benjamin</NavLink>
						<NavLink to='/skill'>Skills</NavLink>
						<NavLink to='/project'>Projects</NavLink>
						<NavLink to='/contact'>Contact</NavLink>
						<a href='./Benjamin_Griggs_Resume.pdf' target="_blank" >Resume</a>
					</div>
				</div>

				<div className="Navbar">
					<img src={logo} alt="logo"/>
					<NavLink to='/' onMouseEnter={this.slideNav} onMouseLeave={this.slideNav} isActive={FirstNavActive}>Home</NavLink>
					<NavLink to='/minecraft'>Minecraft</NavLink>
					<NavLink to='/travel'>Travel</NavLink>
					<NavLink to='/feedback'>Feedback</NavLink>
				</div>
			</div>
		);
  	}
}
