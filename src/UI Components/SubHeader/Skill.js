import React from 'react';
import mendix from '../../imgs/mendix.png'
import java from '../../imgs/java.png'
import c from '../../imgs/c.png'
import cSharp from '../../imgs/cSharp.png'
import css from '../../imgs/css.png'
import html from '../../imgs/html.png'
import javascript from '../../imgs/javascript.png'
import react from '../../imgs/React.png'
import oracle from '../../imgs/oracle.png'
import windows from '../../imgs/windows.png'
import raspberry from '../../imgs/raspberry.png'
import ubuntu from '../../imgs/ubuntu.png'
import './Skill.css';

const Skill = () => {

	return(
		<div className="Skill">
			<h3>Skills</h3>
					<h5>Programming Languages</h5>
					<div className="rowImages">
						<img alt="mendix" src={mendix}></img>
						<img alt="java" src={java}></img>
						<img alt="c" src={c}></img>
						<img alt="c#" src={cSharp}></img>
						<img alt="css" src={css}></img>
						<img alt="html" src={html}></img>
						<img alt="javascript" src={javascript}></img>
						<img alt="react" src={react}></img>
						<img alt="oracle" src={oracle}></img>
					</div>
					<h5>Operating Systems</h5>
					<div className="rowImages">
						<img alt="windows" src={windows}></img>
						<img alt="raspberry pi" src={raspberry}></img>
						<img alt="ubuntu" src={ubuntu}></img>
					
				</div>
			<p>If you want to learn more about what I can do, then check out my <strong><a href="/project">Projects</a></strong> </p>
		</div>
	);
}

export default Skill