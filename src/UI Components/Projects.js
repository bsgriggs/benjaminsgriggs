import React from 'react'
import Project from './Project'
import projectRoot from '../projects.json'

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