import React from 'react'
import FramedImage from './FramedImage'
import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import './Home.css';

const Home = () => {

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
		<div className="Home">
			<div className="Row">
				<div>
					<h3>About Me</h3>
					<hr></hr>
					<p>I am a <strong><a href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue University</a></strong> Computer
					 and Information Technology student. I work for Purdue's IT Enterprise Solutions as an Application Developer.
					  In my free time, I like to go for a run, bake cookies, practice new programming techniques, play piano, and play my Nintendo Switch.</p>
					  <div className="rowImages Wobble">
					  	<i className="fas fa-2x fa-running "  ></i>
					  	<i className="fas fa-2x fa-cookie-bite "  ></i>
						<i className="fas fa-2x fa-laptop-code "  ></i>
						<i className="fas fa-2x fa-music "  ></i>
						<i className="fas fa-2x fa-gamepad "  ></i>
					  </div>
				</div>
				<div className="Img1x1_Large">
					<FramedImage image={"professionalPicTrim.jpg"} alt={"Me"} caption={""}/>
				</div>
			</div>


			<h3>Skills</h3>
			<hr></hr>
			<h5>Programming Languages and Tools</h5>
			<div className="rowImages">
				<img alt="mendix logo" src={'../imgs/mendix.jpg'}></img>
				<img alt="java logo" src={'../imgs/java.jpg'}></img>
				<img alt="c logo" src={'../imgs/c.jpg'}></img>
				<img alt="c# logo" src={'../imgs/cSharp.jpg'}></img>
				<img alt="css logo" src={'../imgs/css.jpg'}></img>
				<img alt="html logo" src={'../imgs/html.jpg'}></img>
				<img alt="javascript logo" src={'../imgs/javascript.jpg'}></img>
			</div>
			<div className="rowImages">
				<img alt="react logo" src={'../imgs/react.jpg'}></img>
				<img alt="node js logo" src={'../imgs/nodejs.jpg'}></img>
				<img alt="github logo" src={'../imgs/github.jpg'}></img>
				<img alt="oracle logo" src={'../imgs/oracle.jpg'}></img>
				<img alt="postgresql logo" src={'../imgs/postgresql.jpg'}></img>
			</div>
			<div>
				<h5>Operating Systems</h5>
				<div className="rowImages">
					<img alt="windows logo" src={'../imgs/windows.jpg'}></img>
					<img alt="raspberry pi logo" src={'../imgs/raspberry.jpg'}></img>
					<img alt="ubuntu logo" src={'../imgs/ubuntu.jpg'}></img>
				</div>
			</div>

				<h3>Projects</h3>
				<hr></hr>
				<h5>Agriculture Technology Procurement</h5>
				<div className="Row">
					<div className="Img16x9">
						<FramedImage image={"atpHome.jpg"} alt={"ATP Homepage"} caption={"ATP Homepage"}  click={clickATP}/>
					</div>
					<p >Agriculture Technology Procurement (ATP) is a web application design for
						Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of
						leased devices. <strong><NavLink to='/project'>Learn more about ATP.</NavLink></strong>
					</p>	
				</div>

				<h5>Career Path Maker</h5>
				<div className="Row">
					<p >Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff
						to plan their future careers within the university. <strong><NavLink to='/project'>Learn more about CPM.</NavLink></strong>
					</p>
					<div className="Img16x9">
						<FramedImage image={"cpmHome.jpg"} alt={"CPM Homepage"} caption={"CPM Homepage"}  click={clickCPM}/>
					</div>
				</div>
									
				<h5>benjaminsgriggs.com</h5>
				<div className="Row">
					<div className="Img16x9">
						<FramedImage image={"benjaminsgriggs.jpg"} alt={"This Homepage"} caption={"This Homepage"}  click={clickBenJo}/>
					</div>
					<p >This Website! This website is an experimental website using a raspberry pi 3 to test development techniques.
						Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's status. <strong><NavLink to='/project'>Learn more about benjaminsgriggs.com.</NavLink></strong>
					</p>
				</div>
				
				<h5>Cost Distribution</h5>
				<div className="Row">
					<p >Cost Distribution is a web application used by Purdue University to estimate and track the costs of their construction 
						projects. Developed by EPI-USE of West Lafayette and supported by me. <strong><NavLink to='/project'>Learn more about Cost Distribution.</NavLink></strong>
					</p>
					<div className="Img16x9">
						<FramedImage image={"costHome.jpg"} alt={"Cost Distribution Overview"} caption={"Cost Distribution Overview"}  click={clickCost}/>
					</div>
				</div>
				
				<h5>ASCII Tetris</h5>
				<div className="Row">
				<div className="Img1x1_Small">
					<FramedImage image={"tetris.jpg"} alt={"Tetris User Interface"} caption={"Tetris User Interface"} click={clickTetris}/>
				</div>
					<p > ASCII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment
						the randomly selected blocks to be dropped. <strong><NavLink to='/project'>Learn more about ASCII Tetris.</NavLink></strong>
					</p>
				</div>

			<Contact />
		</div>
	);
}

export default Home