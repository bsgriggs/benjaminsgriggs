import React from 'react'
import {ImageSlides} from '../ImageSlides'
//ATP
import atp from '../../imgs/Screenshots/atpHome.png'
import atpOrder from '../../imgs/Screenshots/atpOrder.png'
import atpPay from '../../imgs/Screenshots/atpPayment.png'
import atpQuote from '../../imgs/Screenshots/atpQuoteLDAP.png'
import atpDash from '../../imgs/Screenshots/atpDashboard.png'
//CPM
import cpm from '../../imgs/Screenshots/cpmHome.png'
import cpmSearch from '../../imgs/Screenshots/cpmSearch.png'
import cpmJob from '../../imgs/Screenshots/cpmJob.png'
import cpmFileUtility from '../../imgs/Screenshots/cpmFileUtility.png'
import cpmScheduledEvent from '../../imgs/Screenshots/cpmScheduledEvent.png'
//benjaminsgriggs
import fountain from '../../imgs/fountain.png'
//cost
import cost from '../../imgs/Screenshots/costOverview.png'
import costEdit from '../../imgs/Screenshots/costEdit.png'
//tetris
import tetris from '../../imgs/Screenshots/tetris.png'

import mendix from '../../imgs/mendix.png'
import java from '../../imgs/java.png'
import c from '../../imgs/c.png'
import css from '../../imgs/css.png'
import html from '../../imgs/html.png'
import javascript from '../../imgs/javascript.png'
import react from '../../imgs/React.png'
import node from '../../imgs/nodejs.png'
import postgresql from '../../imgs/PostgreSQL.png'
import git from '../../imgs/github.png'
import raspberry from '../../imgs/raspberry.png'
import ubuntu from '../../imgs/ubuntu.png'

import './Project.css'

const Project = () => {

	const atpImages = [
		{ img: atp, caption:"Homepage",description:"Agriculture Technology Procurement (ATP) is a web application design for Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of leased devices."},
		{ img: atpDash, caption:"ATP Order Statistics",description:""},
		{ img: atpOrder, caption:"User Order Wizard",description:""},
		{ img: atpQuote, caption:"Device Special Quote and LDAP",description:""},
		{ img: atpPay, caption:"Account Allocation",description:""},
	]
	const cpmImages = [
		{ img: cpm, caption:"Homepage",description:"Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff to plan their future careers within the university."},
		{ img: cpmSearch, caption:"Search Criteria",description:""},
		{ img: cpmJob, caption:"View Job",description:""},
		{ img: cpmFileUtility, caption:"File Utilty",description:""},
		{ img: cpmScheduledEvent, caption:"Scheduled Events",description:""},
	]
	const bsgImages = [
		{ img: fountain, caption:"Purdue Engineering Fountain",description:"This Website! This website is an experimental website using a raspberry pi 3 to test development techniques. Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's status. \n \n Obviously, you can see what the webstie looks like, so here is a picture of the Purdue Engineering Fountatin by my Sister-in-Law Grace Griggs."},
	]
	const costImages = [
		{ img: cost, caption:"Cost Plan Overview",description:"Cost Distribution is a web application used by Purdue University to estimate and track the costs of their construction projects. Developed by EPI-USE of West Lafayette and supported by me."},
		{ img: costEdit, caption:"Edit Cost Plan",description:""},
	]
	const tetrisImages = [
		{ img: tetris, caption:"Terminal Tetris",description:"ASCII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment the randomly selected blocks to be dropped."},
	]

	// function clickATP(){
	// 	window.open('https://purdueatp-accp.mendixcloud.com', '_blank');
	// }

	// function clickCPM(){
	// 	window.open('https://cpm.mendixcloud.com', '_blank');
	// }

	// function clickBenJo(){
	// 	window.open('https://github.com/bsgriggs/benjodev-react', '_blank');
	// }

	// function clickCost(){
	// 	window.open('https://costdistribution100.mendixcloud.com/', '_blank');
	// }

	// function clickTetris(){
	// 	window.open('https://github.com/bsgriggs/tetris', '_blank');
	// }

    return(
        <div className="Project">
			<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
            <h3>Projects</h3>
			<h4>Agriculture Technology Procurement</h4>
			<ImageSlides contentArray={atpImages} direction={"Left"} />

			<div className="Row">
				<div className="Contributions">
					<h5>Key ATP Contributions</h5>
					<h6><i className="fas fa fa-laptop" ></i>Designed the Entire UI</h6>
					<h6><i className="fas fa fa-desktop" ></i>Implimented Rest APIs and LDAP Queries</h6>
					<h6><i className="fas fa fa-laptop" ></i>Created the Application Framework</h6>
					<h6><i className="fas fa fa-desktop" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa fa-laptop" ></i>Developed Email Code for Order Statuses</h6>
					<h6><i className="fas fa fa-desktop" ></i>Designed a Database Statistics Dashboard</h6>
				</div>
				<div className="TechStack">
					<h5>The ATP Tech Stack</h5>
					<div className="rowImages">
						<img alt="mendix logo" src={mendix}></img>
						<img alt="java logo" src={java}></img>
						<img alt="css logo" src={css}></img>
						<img alt="html logo" src={html}></img>
						<img alt="javascript logo" src={javascript}></img>
						<img alt="postgresql logo" src={postgresql}></img>
					</div>
				</div>
			</div>

			<h4>Career Path Maker</h4>
			<ImageSlides contentArray={cpmImages} />

			<div className="Row">
				<div className="TechStack">
					<h5>The CPM Tech Stack</h5>
					<div className="rowImages">
						<img alt="mendix logo" src={mendix}></img>
						<img alt="java logo" src={java}></img>
						<img alt="css logo" src={css}></img>
						<img alt="html logo" src={html}></img>
						<img alt="javascript logo" src={javascript}></img>
						<img alt="postgresql logo" src={postgresql}></img>
					</div>	
				</div>
				<div className="Contributions">
					<h5>Key CPM Contributions</h5>
					<h6><i className="fas fa-credit-card" ></i>Designed the Entire UI</h6>
					<h6><i className="far fa-credit-card" ></i>Developed Database Integration APIs</h6>
					<h6><i className="fas fa-credit-card" ></i>Created the Application Framework</h6>
					<h6><i className="far fa-credit-card" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa-credit-card" ></i>Implimented Scheduled Database I/O</h6>
				</div>
			</div>
								
			<h4>benjaminsgriggs.com</h4>
			<ImageSlides contentArray={bsgImages} direction={"Left"}/>

			<h5>The benjaminsgriggs.com Tech Stack</h5>
			<div className="rowImages">
				<img alt="css logo" src={css}></img>
				<img alt="html logo" src={html}></img>
				<img alt="javascript logo" src={javascript}></img>
				<img alt="react logo" src={react}></img>
				<img alt="node js logo" src={node}></img>
				<img alt="pi logo" src={raspberry}></img>
				<img alt="github logo" src={git}></img>
			</div>
			
			<h4>Cost Distribution</h4>
			<ImageSlides contentArray={costImages} />

			<div className="Row">
				<div className="Contributions">
				<h5>Key Cost Distribution Contributions</h5>
					<h6><i className="fas fa-credit-card" ></i>Consulted PDF Report Generation</h6>
					<h6><i className="far fa-credit-card" ></i>Supported Production Applcation</h6>
					<h6><i className="fas fa-credit-card" ></i>Managed Production Database Errors</h6>
					<h6><i className="far fa-credit-card" ></i>Implimented RESTful APIs for Reporting</h6>
				</div>
				<div className="TechStack">
					<h5>The Cost Distribution Tech Stack</h5>
					<div className="rowImages">
						<img alt="mendix logo" src={mendix}></img>
						<img alt="java logo" src={java}></img>
						<img alt="css logo" src={css}></img>
						<img alt="html logo" src={html}></img>
						<img alt="javascript logo" src={javascript}></img>
						<img alt="postgresql logo" src={postgresql}></img>
					</div>
				</div>
			</div>
			
			<h4>ASCII Tetris</h4>
			<ImageSlides contentArray={tetrisImages} direction={"Left"}/>

			<div className="Row">
				<div className="Contributions">
				<h5>Key ASCII Tetris Contributions</h5>
					<h6><i className="fas fa-cubes" ></i>Designed the Entire User Interface</h6>
					<h6><i className="fas fa-cubes" ></i>Implimented Structured Queues for Blocks</h6>
					<h6><i className="fas fa-cubes" ></i>Developed User Input Handling</h6>
					<h6><i className="fas fa-cubes" ></i>Implimented Random Block Picker</h6>
				</div>
				<div className="TechStack">
					<h5>The ASCII Tetris Tech Stack</h5>
					<div className="rowImages">
						<img alt="c logo" src={c}></img>
						<img alt="github logo" src={git}></img>
						<img alt="ubuntu logo" src={ubuntu}></img>
					</div>
				</div>
			</div>
        </div>
    );
}

export default Project