import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css';

const Home = () => {

  return(
		<div className="Home">
			<div>
				<span className="Padding"></span>
				<h3>Benjamin Griggs</h3>
				<hr></hr>
				<p>I graduated from <strong><a href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue University</a></strong> Computer
					and Information Technology with distinction. I am seeking technically challenging positions that requires creativity and provides the opprotunity to grow and thrive on a teamwork. 
					A position with several growth opportunities fit for an intrinsically motivated learner. In my free time, I like to go for a run, bake cookies, practice new programming techniques, play piano, and play my Nintendo Switch.</p>
					<div className="rowImages Wobble">
						<i className="fas fa-2x fa-running "  ></i>
						<i className="fas fa-2x fa-cookie-bite "  ></i>
						<i className="fas fa-2x fa-laptop-code "  ></i>
						<i className="fas fa-2x fa-music "  ></i>
						<i className="fas fa-2x fa-gamepad "  ></i>
					</div>
					<div className="HomeNav">
						<NavLink to='/projects'>Projects</NavLink>
						<NavLink to='/skills'>Skills</NavLink>
						<NavLink to='/contact'>Contact</NavLink>
						<a href='./Benjamin_Griggs_Resume.pdf' target="_blank" >Resume</a>
					</div>
			</div>
			<div className="HomeBackground">
				<div className="PurpleHalf"></div>
				<div className="PurpleCurve"></div>
				<div className="WhiteCurve"></div>
				<img src={`../imgs/professionalTrim.png`} alt="Benjamin Steven Griggs"></img>
			</div>
		</div> 
	);
}

export default Home