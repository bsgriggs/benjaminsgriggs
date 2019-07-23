import React from 'react'
import FramedImage from '../../UI Components/FramedImage'
import atp from '../../imgs/atpHome.PNG'
import cpm from '../../imgs/cpmHome.PNG'
import fountain from '../../imgs/fountain.jpg'
import cost from '../../imgs/costOverview.PNG'
import tetris from '../../imgs/tetris.PNG'
import './Project.css'

const Project = () => {

	const text = {
		margin: '5vh 5vw',
	}

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
            <h3>Projects</h3>
			<h5>Agriculture Information Technology Procurement</h5>
			<div className="Row">
				<div className="medImg">
					<FramedImage image={atp} alt={"AITP Homepage"} caption={"AITP Homepage"} className="medImg" click={clickATP} />
				</div>
				<div className="Content">
					<p style={text}>Agriculture Information Technology Procurement (AITP) is a web application design for
						Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of
						leased devices. <strong><a href="/project">Learn more about AITP.</a></strong></p>
				</div>	
			</div>

			<h5>Career Path Maker</h5>
			<div className="Row">
				<div className="Content">
					<p style={text}>Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff
						to plan their future careers within the university. <strong><a href="/project">Learn more about CPM.</a></strong></p>
				</div>
				<div className="medImg">
					<FramedImage image={cpm} alt={"CPM Homepage"} caption={"CPM Homepage"} className="medImg" click={clickCPM}/>
				</div>
			</div>
								
			<h5>benjaminsgriggs.com</h5>
			<div className="Row">
				<div className="smlImg">
					<FramedImage image={fountain} alt={"Purdue Engineering Fountain"} caption={"Purdue Engineering Fountain"} className="smlImg" click={clickBenJo}/>
				</div>
				<div className="Content">
					<p style={text}>This Website! This website is an experimental website using a raspberry pi 3 to test development techniques.
						Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's
						status It runs HTML 5, CSS 3, JQuery 3.3.1, and React. <strong><a href="/project">Learn more about BenJoDev.</a></strong></p>
				</div>
			</div>
			
			<h5>Cost Distripution</h5>
			<div className="Row">
				<div className="Content">
					<p style={text}>Cost Disptripution is a web application used by Purdue University to estimate and track the costs of their construction 
						projects. Developed by EPI-USE of West Lafayette and supported by me. <strong><a href="/project">Learn more about Cost Dipstripution.</a></strong></p>
				</div>
				<div className="medImg">
					<FramedImage image={cost} alt={"Cost Disptripution Overview"} caption={"Cost Dipstripution Overview"} className="medImg" click={clickCost}/>
				</div>
			</div>
			
			<h5>ACSII Tetris</h5>
			<div className="Row">
				<div className="smlImg">
					<FramedImage image={tetris} alt={"Cost Disptripution Overview"} caption={"Cost Dipstripution Overview"} className="smlImg" click={clickTetris}/>
				</div>
				<div className="Content">
					<p style={text}> ACSII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment
					the randomly selected blocks to be dropped. <strong><a href="/project">Learn more about ACSII Tetris.</a></strong></p>	
				</div>
			</div>
        </div>
    );
}

export default Project