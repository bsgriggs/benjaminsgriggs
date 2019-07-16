import React from 'react';
import FramedImage from '../FramedImage'
import professionalPic from '../../imgs/professionalPicTrim.jpg'
import mendix from '../../imgs/mendix.png'
import java from '../../imgs/java.png'
import c from '../../imgs/c.png'
import cSharp from '../../imgs/cSharp.png'
import css from '../../imgs/css.png'
import html from '../../imgs/html.png'
import javascript from '../../imgs/javascript.png'
import react from '../../imgs/React.png'
import oracle from '../../imgs/oracle.png'
import windows from '../../imgs/windows.png'
import raspberry from '../../imgs/raspberry.png'
import ubuntu from '../../imgs/ubuntu.png'
import cookiesPile from '../../imgs/cookiesPile.png'
import './Home.css';

const About = () => {

	const icon ={
		color: '#65379B',
	}

	const imageStyle ={
		width: '30vw',
		margin: '5vh 0vw 0vh 0vw'
	}

	const textLeft = {
		margin: '5vh 5vw',
	}

  return(
		<div>
			<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
			<div className="Row">
				<div className="Content" style={textLeft}>
					<h3>About Me</h3>
					<p>I am a <strong><a href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue University</a></strong> Computer
					 and Information Technology student. I work for Purdue's IT Enterprise Solutions as an Application Developer.
					  In my free time, I like to go for a run, bake cookies, practice new programming techniques, play piano, and play my Nintendo Switch.</p>
					  <div className="rowImages">
					  	<i className="fas fa-2x fa-running" style={icon}></i>
					  	<i className="fas fa-2x fa-cookie-bite" style={icon}></i>
						<i className="fas fa-2x fa-laptop-code" style={icon}></i>
						<i className="fas fa-2x fa-music" style={icon}></i>
						<i className="fas fa-2x fa-gamepad" style={icon}></i>
					  </div>
				</div>
				<FramedImage image={professionalPic} alt={"Me"} caption={""} styles={imageStyle} />	
			</div>

			<div className= "Row">
				<div className="Content" style={textLeft}>
					<h3>Skills</h3>
					<div>
						<h5>Programming Languages</h5>
						<div className="rowImages">
							<img alt="mendix logo" src={mendix}></img>
							<img alt="java logo" src={java}></img>
							<img alt="c logo" src={c}></img>
							<img alt="c# logo" src={cSharp}></img>
							<img alt="css logo" src={css}></img>
							<img alt="html logo" src={html}></img>
							<img alt="javascript logo" src={javascript}></img>
							<img alt="react" src={react}></img>
							<img alt="oracle logo" src={oracle}></img>
						</div>
					</div>
					<div>
						<h5>Operating Systems</h5>
						<div className="rowImages">
							<img alt="windows logo" src={windows}></img>
							<img alt="raspberry pi logo" src={raspberry}></img>
							<img alt="ubuntu logo" src={ubuntu}></img>
						</div>
					</div>
				</div>
			</div>
			
			<div className="Row">
				<FramedImage image={cookiesPile} alt={"homemade cookies"} caption={"My Homemade Cookies"} styles={imageStyle} />
				<div className="Content" style={textLeft}>
					<h3>Projects</h3>
					<div>
						<h5>AITP</h5>
						<p>Agriculture Information Technology Procurement (AITP) is a web application design for Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of leased devices.</p>
						{/* card to website */}
						<h5>CMP</h5>
						<p></p>
						{/* card to website */}
						<h5>BenJoDev</h5>
						<p></p>
						{/* card to website */}
						<h5>Cost Distripution</h5>
						<p></p>
						{/* card to website */}
						<h5>ACSII Tetris</h5>
						<p></p>
						{/* card to website */}
					</div>
				</div>	
			</div>
		</div>
	);
}

export default About