import React from 'react'
import FramedImage from '../FramedImage'
import professionalPic from '../../imgs/professionalPicTrim.jpg'
import Contact from './Contact'

import mendix from '../../imgs/mendix.jpg'
import java from '../../imgs/java.jpg'
import c from '../../imgs/c.jpg'
import cSharp from '../../imgs/cSharp.jpg'
import css from '../../imgs/css.jpg'
import html from '../../imgs/html.jpg'
import javascript from '../../imgs/javascript.jpg'
import react from '../../imgs/React.jpg'
import node from '../../imgs/nodejs.jpg'
import git from '../../imgs/github.jpg'
import oracle from '../../imgs/oracle.jpg'
import postgresql from '../../imgs/PostgreSQL.jpg'
import windows from '../../imgs/windows.jpg'
import raspberry from '../../imgs/raspberry.jpg'
import ubuntu from '../../imgs/ubuntu.jpg'

import atp from '../../imgs/Screenshots/atpHome.jpg'
import cpm from '../../imgs/Screenshots/cpmHome.jpg'
import benjaminsgriggs from '../../imgs/Screenshots/benjaminsgriggs.jpg'
import cost from '../../imgs/Screenshots/costHome.jpg'
import tetris from '../../imgs/Screenshots/tetris.jpg'

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
					  <div className="rowImages">
					  	<i className="fas fa-2x fa-running"  ></i>
					  	<i className="fas fa-2x fa-cookie-bite"  ></i>
						<i className="fas fa-2x fa-laptop-code"  ></i>
						<i className="fas fa-2x fa-music"  ></i>
						<i className="fas fa-2x fa-gamepad"  ></i>
					  </div>
				</div>
				<div className="Img1x1_Large">
					<FramedImage image={professionalPic} alt={"Me"} caption={""}/>
				</div>
			</div>


			<h3>Skills</h3>
			<hr></hr>
			<h5>Programming Languages and Tools</h5>
			<div className="rowImages">
				<img alt="mendix logo" src={mendix}></img>
				<img alt="java logo" src={java}></img>
				<img alt="c logo" src={c}></img>
				<img alt="c# logo" src={cSharp}></img>
				<img alt="css logo" src={css}></img>
				<img alt="html logo" src={html}></img>
				<img alt="javascript logo" src={javascript}></img>
			</div>
			<div className="rowImages">
				<img alt="react logo" src={react}></img>
				<img alt="node js logo" src={node}></img>
				<img alt="github logo" src={git}></img>
				<img alt="oracle logo" src={oracle}></img>
				<img alt="postgresql logo" src={postgresql}></img>
			</div>
			<div>
				<h5>Operating Systems</h5>
				<div className="rowImages">
					<img alt="windows logo" src={windows}></img>
					<img alt="raspberry pi logo" src={raspberry}></img>
					<img alt="ubuntu logo" src={ubuntu}></img>
				</div>
			</div>

				<h3>Projects</h3>
				<hr></hr>
				<h5>Agriculture Technology Procurement</h5>
				<div className="Row">
					<div className="Img16x9">
						<FramedImage image={atp} alt={"ATP Homepage"} caption={"ATP Homepage"}  click={clickATP}/>
					</div>
					<p >Agriculture Technology Procurement (ATP) is a web application design for
						Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of
						leased devices. <strong><a href="/project">Learn more about AITP.</a></strong>
					</p>	
				</div>

				<h5>Career Path Maker</h5>
				<div className="Row">
					<p >Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff
						to plan their future careers within the university. <strong><a href="/project">Learn more about CPM.</a></strong>
					</p>
					<div className="Img16x9">
						<FramedImage image={cpm} alt={"CPM Homepage"} caption={"CPM Homepage"}  click={clickCPM}/>
					</div>
				</div>
									
				<h5>benjaminsgriggs.com</h5>
				<div className="Row">
					<div className="Img16x9">
						<FramedImage image={benjaminsgriggs} alt={"This Homepage"} caption={"This Homepage"}  click={clickBenJo}/>
					</div>
					<p >This Website! This website is an experimental website using a raspberry pi 3 to test development techniques.
						Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's status. <strong><a href="/project">Learn more about benjaminsgriggs.com.</a></strong>
					</p>
				</div>
				
				<h5>Cost Distribution</h5>
				<div className="Row">
					<p >Cost Distribution is a web application used by Purdue University to estimate and track the costs of their construction 
						projects. Developed by EPI-USE of West Lafayette and supported by me. <strong><a href="/project">Learn more about Cost Distribution.</a></strong>
					</p>
					<div className="Img16x9">
						<FramedImage image={cost} alt={"Cost Distribution Overview"} caption={"Cost Distribution Overview"}  click={clickCost}/>
					</div>
				</div>
				
				<h5>ASCII Tetris</h5>
				<div className="Row">
				<div className="Img1x1_Small">
					<FramedImage image={tetris} alt={"Tetris User Interface"} caption={"Tetris User Interface"} click={clickTetris}/>
				</div>
					<p > ASCII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment
						the randomly selected blocks to be dropped. <strong><a href="/project">Learn more about ASCII Tetris.</a></strong>
					</p>
				</div>

			<Contact />
		</div>
	);
}

export default Home