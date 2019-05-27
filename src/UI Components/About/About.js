import React from 'react';
import FramedImage from '../FramedImage'
import professionalPic from '../../imgs/professionalPicTrim.jpg'
import './About.css';

const About = () => {
  return(
		<div className="About">
			<h1>About</h1>
			<FramedImage image={professionalPic} alt={"Me"} caption={"Benjamin Steven Griggs"}/>
		</div>
	);
}

export default About