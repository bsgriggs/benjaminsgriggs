import React from 'react'
import {ImageSlides} from '../ImageSlides'
//ATP
import atp from '../../imgs/Screenshots/atpHome.jpg'
import atpOrder from '../../imgs/Screenshots/atpOrder.jpg'
import atpEmail from '../../imgs/Screenshots/atpEmail.jpg'
import atpQuote from '../../imgs/Screenshots/atpQuoteLDAP.jpg'
import atpDash from '../../imgs/Screenshots/atpDashboard.jpg'
//CPM
import cpm from '../../imgs/Screenshots/cpmHome.jpg'
import cpmSearch from '../../imgs/Screenshots/cpmSearch.jpg'
import cpmJob from '../../imgs/Screenshots/cpmJob.jpg'
import cpmScheduledEvent from '../../imgs/Screenshots/cpmScheduledEvent.jpg'
//benjaminsgriggs
import benjaminsgriggs from '../../imgs/Screenshots/benjaminsgriggs.jpg'
//cost
import cost from '../../imgs/Screenshots/costHome.jpg'
//tetris
import tetris from '../../imgs/Screenshots/tetris.jpg'

import mendix from '../../imgs/mendix.jpg'
import java from '../../imgs/java.jpg'
import c from '../../imgs/c.jpg'
import css from '../../imgs/css.jpg'
import html from '../../imgs/html.jpg'
import javascript from '../../imgs/javascript.jpg'
import react from '../../imgs/React.jpg'
import node from '../../imgs/nodejs.jpg'
import postgresql from '../../imgs/PostgreSQL.jpg'
import git from '../../imgs/github.jpg'
import raspberry from '../../imgs/raspberry.jpg'
import ubuntu from '../../imgs/ubuntu.jpg'

import './Project.css'

const Project = () => {
	const Img16x9 = {
		width: '40vw'
	}
	const Img1x1 = {
		width: '25vw'
	}

	const atpImages = [
		{ img: atp, caption:"Homepage",description:"Agriculture Technology Procurement (ATP) is a web application design for Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of leased devices.\nHere you can see the homepage for the standard user role. I designed the interface to use these Purdue themed cards in the menus. As you can see under `MyOrders`, the cards have the ability to display information - like warnings - related to the menu. Updates for the user will show in green while warnings will show in red. For example, the number of orders that required action now will show in red."},
		{ img: atpDash, caption:"ATP Order Statistics",description:"Our users required the ability to see the status of the application at a glance. As ordering software, this includes the provided graphs of each Order Status as well as many others.\nThese graphs include the aforementioned red warnings. However, these warnings inform our users of the number of orders that have been in that status for 7 days or more. This way, they can track down orders that should have progressed by now. This particular, acceptance data set has several warnings for testing purposes."},
		{ img: atpOrder, caption:"User Order Wizard",description:""},
		{ img: atpQuote, caption:"Device Special Quote and LDAP",description:""},
		{ img: atpEmail, caption:"Sample Email Report",description:""},
	]
	const cpmImages = [
		{ img: cpm, caption:"Homepage",description:"Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff to plan their future careers within the university."},
		{ img: cpmSearch, caption:"Search Criteria",description:""},
		{ img: cpmJob, caption:"View Job",description:""},
		{ img: cpmScheduledEvent, caption:"Scheduled Events",description:""},
	]
	const bsgImages = [
		{ img: benjaminsgriggs, caption:"This Homepage",description:"This Website! This website is an experimental website using a raspberry pi 3 to test development techniques. Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's status.\nGiven that you can already see the entirety of the project, it doesn't make sense to provide many screenshots. If you have any questions or feedback, then refer to the Feedback page."},
	]
	const costImages = [
		{ img: cost, caption:"Cost Plan Overview",description:"Cost Distribution is a web application used by Purdue University to estimate and track the costs of their construction projects. Developed by EPI-USE of West Lafayette and supported by me.\nIn one case, one of the application's administrators had deleted a user from the database that no longer worked for Purdue. This resulted in the system being unable to retieve any objects tied to the former account. After I identified this mistake, I used a backup and some SQL commands to `stitch` together the missing data and restore the system to operation.\nDue to security concerns, I am unable to provide any more detailed screenshots."},
	]
	const tetrisImages = [
		{ img: tetris, caption:"Terminal Tetris",description:"ASCII Tetris was a fun class project developed to run in a linux terminal and expand our understanding of C data structures. I designed the interface along with the queue to impliment the randomly selected blocks to be dropped. Essentially, the program intially fills a queue of 5 blocks randomly. Then, the program dequeues the block and adds it to the top of the interface and randomly selects another block to add to the queue.\nAlso, the program includes weighted scoring. The higher level the play is in the game, the more points they receive for a line clear."},
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
			<h3>Agriculture Technology Procurement</h3>
			<hr></hr>
			<ImageSlides contentArray={atpImages} direction={"Left"} imageStyle={Img16x9} />
			
			<div className="Row">
				<div className="Contributions">
					<h5>Key Contributions</h5>
					<hr></hr>
					<h6><i className="fas fa fa-laptop" ></i>Designed the Entire UI</h6>
					<h6><i className="fas fa fa-desktop" ></i>Implimented Rest APIs and LDAP Queries</h6>
					<h6><i className="fas fa fa-laptop" ></i>Created the Application Framework</h6>
					<h6><i className="fas fa fa-desktop" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa fa-laptop" ></i>Developed Email Code for Order Statuses</h6>
					<h6><i className="fas fa fa-desktop" ></i>Designed a Database Statistics Dashboard</h6>
				</div>
				<div className="TechStack">
					<h5>The ATP Tech Stack</h5>
					<hr></hr>
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

			<h3>Career Path Maker</h3>
			<hr></hr>
			<ImageSlides contentArray={cpmImages} imageStyle={Img16x9} />

			<div className="Row">
				<div className="TechStack">
					<h5>The CPM Tech Stack</h5>
					<hr></hr>
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
					<h5>Key Contributions</h5>
					<hr></hr>
					<h6><i className="fas fa-credit-card" ></i>Designed the Entire UI</h6>
					<h6><i className="far fa-credit-card" ></i>Developed Database Integration APIs</h6>
					<h6><i className="fas fa-credit-card" ></i>Created the Application Framework</h6>
					<h6><i className="far fa-credit-card" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa-credit-card" ></i>Implimented Scheduled Database I/O</h6>
				</div>
			</div>
								
			<h3>benjaminsgriggs.com</h3>
			<hr></hr>
			<ImageSlides contentArray={bsgImages} direction={"Left"} imageStyle={Img16x9} />

			<h5>The benjaminsgriggs.com Tech Stack</h5>
			<hr id="small"></hr>
			<div className="rowImages">
				<img alt="css logo" src={css}></img>
				<img alt="html logo" src={html}></img>
				<img alt="javascript logo" src={javascript}></img>
				<img alt="react logo" src={react}></img>
				<img alt="node js logo" src={node}></img>
				<img alt="pi logo" src={raspberry}></img>
				<img alt="github logo" src={git}></img>
			</div>
			
			<h3>Cost Distribution</h3>
			<hr></hr>
			<ImageSlides contentArray={costImages} imageStyle={Img16x9}/>

			<div className="Row">
				<div className="Contributions">
				<h5>Key Contributions</h5>
				<hr></hr>
					<h6><i className="fas fa-credit-card" ></i>Consulted PDF Report Generation</h6>
					<h6><i className="far fa-credit-card" ></i>Supported Production Applcation</h6>
					<h6><i className="fas fa-credit-card" ></i>Managed Production Database Errors</h6>
					<h6><i className="far fa-credit-card" ></i>Implimented RESTful APIs for Reporting</h6>
				</div>
				<div className="TechStack">
					<h5>The Cost Distribution Tech Stack</h5>
					<hr></hr>
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
			
			<h3>ASCII Tetris</h3>
			<hr></hr>
			<ImageSlides contentArray={tetrisImages} direction={"Left"} imageStyle={Img1x1}/>

			<div className="Row">
				<div className="Contributions">
				<h5>Key Contributions</h5>
				<hr></hr>
					<h6><i className="fas fa-cubes" ></i>Designed the Entire User Interface</h6>
					<h6><i className="fas fa-cubes" ></i>Implimented Structured Queues for Blocks</h6>
					<h6><i className="fas fa-cubes" ></i>Developed User Input Handling</h6>
					<h6><i className="fas fa-cubes" ></i>Implimented Random Block Picker</h6>
				</div>
				<div className="TechStack">
					<h5>The ASCII Tetris Tech Stack</h5>
					<hr></hr>
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