import React from 'react'
import skillRoot from '../skills.json'
import Skill from './Skill'
import './Skills.css'

class Skills extends React.Component{
	render(){
		const types = [
			'Programming Languages and Tools',
			'Operating Systems'
		]

		const skills = skillRoot.skills
		return(
			<div className="Skills">
				<span className="Padding"></span>
				<h3>Skills</h3>
				<hr></hr>
				<div>
					{types.map(function(type, index){
						return(
							<div key={index}>
								<h5>{type}</h5>
								<div className="skillImages">
									{skills.map(function(skill, index){
										if (skill.type === type){
											return (<Skill key={index} skill={skill}/>)
										} return(null)})}
								</div>
							</div>)
					})}
				</div>
			</div>
		)};
}
export default Skills;