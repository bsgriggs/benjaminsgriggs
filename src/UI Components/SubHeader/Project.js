import React from 'react'
import FramedImage from '../../UI Components/FramedImage'
import ImageGallery from 'react-image-gallery'
import atp from '../../imgs/atpHome.PNG'
import cpm from '../../imgs/cpmHome.PNG'
import fountain from '../../imgs/fountain.jpg'
import cost from '../../imgs/costOverview.PNG'
import tetris from '../../imgs/tetris.PNG'

import atpOrder from '../../imgs/atpOrder.PNG'
import atpDash from '../../imgs/atpDashboard.PNG'

import mendix from '../../imgs/mendix.png'
import java from '../../imgs/java.png'
import c from '../../imgs/c.png'
import css from '../../imgs/css.png'
import html from '../../imgs/html.png'
import javascript from '../../imgs/javascript.png'
import react from '../../imgs/React.png'
import node from '../../imgs/nodejs.svg'
import postgresql from '../../imgs/PostgreSQL.png'
import git from '../../imgs/github.png'
import raspberry from '../../imgs/raspberry.png'
import ubuntu from '../../imgs/ubuntu.png'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'


import './Project.css'

const Project = () => {

	const atpGall = [
		{ original: atp, originalAlt:"Homepage"},
		{ original: atpOrder, originalAlt: "Order Wizard"},
		{ original: atpDash, originalAlt: "Database Statistics Charts"}
	  ]

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
        <div className="Project">
			<link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
            <h3>Projects</h3>
			<h4>Agriculture Technology Procurement</h4>
			<div className="Row">
				<div className="Gallery">
					<ImageGallery items={atpGall} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
				</div>
				<p>Agriculture Technology Procurement (ATP) is a web application design for
					Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of
					leased devices. <strong><a href="https://purdueatp-accp.mendixcloud.com">View ATP.</a></strong>
				</p>
			</div>

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
			<div className="Row">
				<p>Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff
					to plan their future careers within the university. <strong><a href="https://cpm.mendixcloud.com">View CPM.</a></strong>
				</p>
	
				<div className="Gallery">
					<ImageGallery items={atpGall} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
				</div>
			</div>
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
					<h6><i className="far fa-credit-card" ></i>Implimented Rest APIs and LDAP Queries</h6>
					<h6><i className="fas fa-credit-card" ></i>Created the Application Framework</h6>
					<h6><i className="far fa-credit-card" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa-credit-card" ></i>Developed Email Code for Order Statuses</h6>
					<h6><i className="far fa-credit-card" ></i>Designed a Database Statistics Dashboard</h6>
				</div>
			</div>
								
			<h4>benjaminsgriggs.com</h4>
			<div className="Row">
				<div className="Gallery">
					<ImageGallery items={atpGall} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
				</div>
				<p>This Website! This website is an experimental website using a raspberry pi 3 to test development techniques.
					Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's status. <strong><a href="https://github.com/bsgriggs/benjodev-react">View BenJoDev.</a></strong>
				</p>
			</div>
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
			<div className="Row">
				<p>Cost Distribution is a web application used by Purdue University to estimate and track the costs of their construction 
					projects. Developed by EPI-USE of West Lafayette and supported by me. <strong><a href="https://costdistribution100.mendixcloud.com/">View Cost Distribution.</a></strong>
				</p>
				<div className="Gallery">
					<ImageGallery items={atpGall} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
				</div>
			</div>
			<div className="Row">
				<div className="Contributions">
				<h5>Key Cost Distribution Contributions</h5>
					<h6><i className="fas fa-credit-card" ></i>Designed the Entire UI</h6>
					<h6><i className="far fa-credit-card" ></i>Implimented Rest APIs and LDAP Queries</h6>
					<h6><i className="fas fa-credit-card" ></i>Created the Application Framework</h6>
					<h6><i className="far fa-credit-card" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa-credit-card" ></i>Developed Email Code for Order Statuses</h6>
					<h6><i className="far fa-credit-card" ></i>Designed a Database Statistics Dashboard</h6>
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
			<div className="Row">
				<div className="Gallery">
					<ImageGallery items={atpGall} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
				</div>
				<p> ASCII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment
				the randomly selected blocks to be dropped. <strong><a href="https://github.com/bsgriggs/tetris">View ASCII Tetris.</a></strong>
				</p>	
			</div>
			<div className="Row">
				<div className="Contributions">
				<h5>Key ASCII Tetris Contributions</h5>
					<h6><i className="fas fa-credit-card" ></i>Designed the Entire UI</h6>
					<h6><i className="far fa-credit-card" ></i>Implimented Rest APIs and LDAP Queries</h6>
					<h6><i className="fas fa-credit-card" ></i>Created the Application Framework</h6>
					<h6><i className="far fa-credit-card" ></i>Crafted the Application Database</h6>
					<h6><i className="fas fa-credit-card" ></i>Developed Email Code for Order Statuses</h6>
					<h6><i className="far fa-credit-card" ></i>Designed a Database Statistics Dashboard</h6>
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