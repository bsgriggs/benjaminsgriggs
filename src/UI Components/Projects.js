import React from 'react'
import Project from './Project'
import projectRoot from '../projects.json'
import PageNav from './PageNav'
import './Projects.css'

class Projects extends React.Component{
	render() {
		const projects = projectRoot.projects
		const NavTitles =[]
		const NavIDs =[]
		projects.forEach(project => {
			NavTitles.push(project.title)
			NavIDs.push(project.id)
		});
		return(
			<div className="Projects">
				<PageNav NavTitles={NavTitles} NavIDs={NavIDs}/>
				<div>
					{projects.map(function(project, index){
						return (<Project key={index} index={index} project={project}/>)
					})}
				</div>				
			</div>
		);
	}			
}

export default Projects;