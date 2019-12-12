import React from 'react'
import Project from './Project'
import projectRoot from '../projects.json'
// import {ImageSlides} from './ImageSlides'
// //ATP
// import atp from '../imgs/Screenshots/atpHome.jpg'
// import atpOrder from '../imgs/Screenshots/atpOrder.jpg'
// import atpEmail from '../imgs/Screenshots/atpEmail.jpg'
// import atpQuote from '../imgs/Screenshots/atpQuoteLDAP.jpg'
// import atpDash from '../imgs/Screenshots/atpDashboard.jpg'
// //CPM
// import cpm from '../imgs/Screenshots/cpmHome.jpg'
// import cpmSearch from '../imgs/Screenshots/cpmSearch.jpg'
// import cpmJob from '../imgs/Screenshots/cpmJob.jpg'
// import cpmScheduledEvent from '../imgs/Screenshots/cpmScheduledEvent.jpg'
// //benjaminsgriggs
// import benjaminsgriggs from '../imgs/Screenshots/benjaminsgriggs.jpg'
// //cost
// import cost from '../imgs/Screenshots/costHome.jpg'
// import costOverview from '../imgs/Screenshots/costOverview.jpg'
// import costReport from '../imgs/Screenshots/costReport.jpg'
// //tetris
// import tetris from '../imgs/Screenshots/tetris.jpg'

// import mendix from '../imgs/mendix.jpg'
// import java from '../imgs/java.jpg'
// import c from '../imgs/c.jpg'
// import css from '../imgs/css.jpg'
// import html from '../imgs/html.jpg'
// import javascript from '../imgs/javascript.jpg'
// import react from '../imgs/React.jpg'
// import node from '../imgs/nodejs.jpg'
// import postgresql from '../imgs/PostgreSQL.jpg'
// import git from '../imgs/github.jpg'
// import raspberry from '../imgs/raspberry.jpg'
// import ubuntu from '../imgs/ubuntu.jpg'

import './Projects.css'

class Projects extends React.Component{
	render() {
		const projects = projectRoot.projects
		console.log('Projects')
		console.log(projects)
		return(
			<div className="Projects">
				{projects.map(function(project, index){
					return (<Project key={index} project={project}/>)
				})}
			</div>
		);
	}			
}

export default Projects;