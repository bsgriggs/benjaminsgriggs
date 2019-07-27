import React from 'react'
import FramedImage from '../../UI Components/FramedImage'
import atp from '../../imgs/atpHome.PNG'
import cpm from '../../imgs/cpmHome.PNG'
import fountain from '../../imgs/fountain.jpg'
import cost from '../../imgs/costOverview.PNG'
import tetris from '../../imgs/tetris.PNG'

import mendix from '../../imgs/mendix.png'
import java from '../../imgs/java.png'
import c from '../../imgs/c.png'
import cSharp from '../../imgs/cSharp.png'
import css from '../../imgs/css.png'
import html from '../../imgs/html.png'
import javascript from '../../imgs/javascript.png'
import react from '../../imgs/React.png'
import oracle from '../../imgs/oracle.png'
import postgresql from '../../imgs/PostgreSQL.png'
import windows from '../../imgs/windows.png'
import raspberry from '../../imgs/raspberry.png'
import ubuntu from '../../imgs/ubuntu.png'

import './Project.css'

const Project = () => {

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
			<h4>Agriculture Information Technology Procurement</h4>
			<div className="Row">
				<div className="medImg">
					<FramedImage image={atp} alt={"AITP Homepage"} caption={"AITP Homepage"}click={clickATP} />
				</div>
				<p>Agriculture Information Technology Procurement (AITP) is a web application design for
					Purdue University's agriculture department to facilitate the ordering, tracking, and procurement of
					leased devices. <strong><a href="https://purdueatp-accp.mendixcloud.com">View AITP.</a></strong>
				</p>
			</div>
			<h5>The AITP Tech Stack</h5>
			<div className="rowImages">
				<img alt="mendix logo" src={mendix}></img>
				<img alt="java logo" src={java}></img>
				<img alt="css logo" src={css}></img>
				<img alt="html logo" src={html}></img>
				<img alt="javascript logo" src={javascript}></img>
				<img alt="postgresql logo" src={postgresql}></img>
			</div>
			<p>
				This application was built using Mendix 7.23.3 running PostgreSQL 9.6. Specialized data integration code
				was written using AdoptOpenJDK Java 8. The web interface design was written with HTML 5 using CSS 3 
				and SAP icons. Specialized interface widgets were created using vanilla JavaScript.
			</p>

			<h5>Key AITP Contriutions</h5>
			<h6>Thing1</h6>
			<h6>Thing2</h6>

			<h4>Career Path Maker</h4>
			<div className="Row">
				<p>Career Path Maker (CPM) is a Mendix based web application designed for Purdue University faculty and staff
					to plan their future careers within the university. <strong><a href="https://cpm.mendixcloud.com">View CPM.</a></strong>
				</p>
	
				<div className="medImg">
					<FramedImage image={cpm} alt={"CPM Homepage"} caption={"CPM Homepage"} click={clickCPM}/>
				</div>
			</div>
								
			<h4>benjaminsgriggs.com</h4>
			<div className="Row">
				<div className="smlImg">
					<FramedImage image={fountain} alt={"Purdue Engineering Fountain"} caption={"Purdue Engineering Fountain"} click={clickBenJo}/>
				</div>
				<p>This Website! This website is an experimental website using a raspberry pi 3 to test development techniques.
					Also, this website is a catalog of my trip to Turkey in Summer 2019 and a Minecraft Server API to check my Minecraft Server's
					status It runs HTML 5, CSS 3, JQuery 3.3.1, and React. <strong><a href="https://github.com/bsgriggs/benjodev-react">View BenJoDev.</a></strong>
				</p>
			</div>
			
			<h4>Cost Distripution</h4>
			<div className="Row">
				<p>Cost Disptripution is a web application used by Purdue University to estimate and track the costs of their construction 
					projects. Developed by EPI-USE of West Lafayette and supported by me. <strong><a href="https://costdistribution100.mendixcloud.com/">View Cost Dipstripution.</a></strong>
				</p>
				<div className="medImg">
					<FramedImage image={cost} alt={"Cost Disptripution Overview"} caption={"Cost Dipstripution Overview"} click={clickCost}/>
				</div>
			</div>
			
			<h4>ACSII Tetris</h4>
			<div className="Row">
				<div className="smlImg">
					<FramedImage image={tetris} alt={"Tetris User Interface"} caption={"Tetris User Interface"} click={clickTetris}/>
				</div>
				<p> ACSII Tetris is a group class project developed to run in a linux terminal. I designed the interface along with the queue to impliment
				the randomly selected blocks to be dropped. <strong><a href="https://github.com/bsgriggs/tetris">View ACSII Tetris.</a></strong>
				</p>	
			</div>
        </div>
    );
}

export default Project