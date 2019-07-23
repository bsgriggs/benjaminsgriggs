import React from 'react'
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
import postgresql from '../../imgs/PostgreSQL.png'
import windows from '../../imgs/windows.png'
import raspberry from '../../imgs/raspberry.png'
import ubuntu from '../../imgs/ubuntu.png'
import atp from '../../imgs/atpHome.PNG'
import cpm from '../../imgs/cpmHome.PNG'
import fountain from '../../imgs/fountain.jpg'
import cost from '../../imgs/costOverview.PNG'
import tetris from '../../imgs/tetris.PNG'
import './Home.css';

const About = () => {

	const icon ={
		color: '#65379B',
	}

	function clickATP(){
		window.open('https://purdueatp-accp.mendixcloud.com', '_blank');
	}

	function clickCPM(){
		window.open('https://cpm.mendixcloud.com', '_blank');
	}

	function clickBenJo(){
		window.open('https://github.com/bsgriggs/benjodev-react', '_blank');
	}

	function clickCost(){
		window.open('https://costdistribution100.mendixcloud.com/', '_blank');
	}

	function clickTetris(){
		window.open('https://github.com/bsgriggs/tetris', '_blank');
	}


  return(
		<div>
			<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
			<div className="Row">
				<div className="Home">
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
				<div className="lrgImg">
					<FramedImage image={professionalPic} alt={"Me"} caption={""} className="lrgImg" />
				</div>
			</div>

			<div className= "Row">
				<div className="Home">
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
							<img alt="postgresql logo" src={postgresql}></img>
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

			<div className="Home">
				<h3>Projects</h3>
				
				<h5>Agriculture Information Technology Procurement</h5>
				<div className="Row">
					<div className="medImg">
						<FramedImage image={atp} alt={"AITP Homepage"} caption={"AITP Homepage"} className="medImg" click={clickATP} />
					</div>
					<div className="Home">
						<p >Agriculture Information Technology Procurement (AITP) is a web application design for
							Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of
							leased devices. <strong><a href="/project">Learn more about AITP.</a></strong></p>
					</div>	
				</div>

				<h5>Career Path Maker</h5>
				<div className="Row">
					<div className="Home">
						<p >Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff
							to plan their future careers within the university. <strong><a href="/project">Learn more about CPM.</a></strong></p>
					</div>
					<div className="medImg">
						<FramedImage image={cpm} alt={"CPM Homepage"} caption={"CPM Homepage"} className="medImg" click={clickCPM}/>
					</div>
				</div>
									
				<h5>benjaminsgriggs.com</h5>
				<div className="Row">
					<div className="smlImg">
						<FramedImage image={fountain} alt={"Purdue Engineering Fountain"} caption={"Purdue Engineering Fountain"} className="smlImg" click={clickBenJo}/>
					</div>
					<div className="Home">
						<p >This Website! This website is an experimental website using a raspberry pi 3 to test development techniques.
							Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's
							status It runs HTML 5, CSS 3, JQuery 3.3.1, and React. <strong><a href="/project">Learn more about BenJoDev.</a></strong></p>
					</div>
				</div>
				
				<h5>Cost Distripution</h5>
				<div className="Row">
					<div className="Home">
						<p >Cost Disptripution is a web application used by Purdue University to estimate and track the costs of their construction 
							projects. Developed by EPI-USE of West Lafayette and supported by me. <strong><a href="/project">Learn more about Cost Dipstripution.</a></strong></p>
					</div>
					<div className="medImg">
						<FramedImage image={cost} alt={"Cost Disptripution Overview"} caption={"Cost Dipstripution Overview"} className="medImg" click={clickCost}/>
					</div>
				</div>
				
				<h5>ACSII Tetris</h5>
				<div className="Row">
					<div className="smlImg">
						<FramedImage image={tetris} alt={"Cost Disptripution Overview"} caption={"Cost Dipstripution Overview"} className="smlImg" click={clickTetris}/>
					</div>
					<div className="Home">
						<p > ACSII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment
						the randomly selected blocks to be dropped. <strong><a href="/project">Learn more about ACSII Tetris.</a></strong></p>	
					</div>
				</div>
			</div>
			
			<h3>Contact</h3>
		</div>
	);
}

export default About