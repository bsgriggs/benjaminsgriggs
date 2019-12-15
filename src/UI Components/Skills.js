import React from 'react'
import './Skills.css'

const Home = () => {

        return(
                <div className="Skills">
			<h3>Skills</h3>
			<hr></hr>
			<h5>Programming Languages and Tools</h5>
			<div className="skillImages">
				<img alt="mendix " src={'../imgs/mendix.jpg'}></img>
				<img alt="java " src={'../imgs/java.jpg'}></img>
				<img alt="c " src={'../imgs/c.jpg'}></img>
				<img alt="c# " src={'../imgs/cSharp.jpg'}></img>
				<img alt="css " src={'../imgs/css.jpg'}></img>
				<img alt="html " src={'../imgs/html.jpg'}></img>
				<img alt="javascript " src={'../imgs/javascript.jpg'}></img>
				<img alt="react " src={'../imgs/react.jpg'}></img>
				<img alt="node js " src={'../imgs/nodejs.jpg'}></img>
				<img alt="python" src={'../imgs/python.jpg'}></img>
				<img alt="github " src={'../imgs/github.jpg'}></img>
				<img alt="oracle " src={'../imgs/oracle.jpg'}></img>
				<img alt="postgresql " src={'../imgs/postgresql.jpg'}></img>
			</div>

                        <div>
				<h5>Operating Systems</h5>
				<div className="skillImages">
					<img alt="windows " src={'../imgs/windows.jpg'}></img>
					<img alt="raspberry pi " src={'../imgs/raspberry.jpg'}></img>
					<img alt="ubuntu " src={'../imgs/ubuntu.jpg'}></img>
				</div>
			</div>
                </div>
        )
}
export default Home