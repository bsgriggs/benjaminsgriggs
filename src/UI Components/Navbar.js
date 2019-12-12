import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export class Navbar extends React.Component{
	constructor(props){
		super(props);

		//other methods
		this.slideNav = this.slideNav.bind(this);
		this.clickLogo = this.clickLogo.bind(this);
	}

	slideNav(){
		const slid = document.getElementById("slider");
		slid.classList.toggle("down");
		slid.classList.toggle("up");
	}

	clickLogo(){
		window.open("/","_self")
	}

 	//trigger exact to behavior for NavLink Benjamin Griggs when a sub NavLink is active
  	render() {
		const FirstNavActive = () => {
			const sub = this.props.location.pathname.substring(0,2);
			if (sub ==='/a' || sub === '/f' || sub === '/')
				return true;
			return false;
		};

		return (
			<div>
				<div id="slider" className="up">
					<div className="Slider" onMouseEnter={this.slideNav} onMouseLeave={this.slideNav}>
						<NavLink exact to='/'>Benjamin</NavLink>
						{/* <NavLink to='/feedback'>Feedback</NavLink> */}
						<a href='./Benjamin_Griggs_Resume.pdf' target="_blank" >Resume</a>
					</div>
				</div>

				<div className="Navbar">
					<img src={"/imgs/BenjaminSGriggs.svg"} alt="logo" onClick={this.clickLogo}/>
					<NavLink id='home' to='/' 
						onMouseEnter={this.slideNav} 
						onMouseLeave={this.slideNav} 
						isActive={FirstNavActive}>
							Home<i className="fas fa-caret-down"  ></i> 
					</NavLink>
					{/* <NavLink to='/minecraft'>Minecraft</NavLink> */}
					<NavLink to='/projects'>Projects</NavLink>
					<NavLink to='/travel'>Travel</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
				</div>
			</div>
		);
  	}
}
