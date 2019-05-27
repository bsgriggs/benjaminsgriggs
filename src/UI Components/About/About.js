import React from 'react';
import FramedImage from '../FramedImage'
import professionalPic from '../../imgs/professionalPicTrim.jpg'
import './About.css';

const About = () => {
  return(
		<div className="About">
			<div className="Left">
				<h3>About Me</h3>
				<p>I am a <strong><a href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue University</a></strong> Computer and Information Technology student.
            	 I work for Purdue's IT Enterprise Solutions as an Application Developer. In my free time, I like to browse Twitter and Reddit
            	 to keep up with current events, learn and practice new development techniques, lurk on Twitch, go for an occasional run, bake.</p>
			</div>
			<FramedImage image={professionalPic} alt={"Me"} caption={"Benjamin Steven Griggs"}/>
		</div>
	);
}

export default About