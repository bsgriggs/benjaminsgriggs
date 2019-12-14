import React from 'react'

const Home = () => {

        return(
                <div>
			<h3>Skills</h3>
			<hr></hr>
			<h5>Programming Languages and Tools</h5>
			<div className="rowImages">
				<img alt="mendix logo" src={'../imgs/mendix.jpg'}></img>
				<img alt="java logo" src={'../imgs/java.jpg'}></img>
				<img alt="c logo" src={'../imgs/c.jpg'}></img>
				<img alt="c# logo" src={'../imgs/cSharp.jpg'}></img>
				<img alt="css logo" src={'../imgs/css.jpg'}></img>
				<img alt="html logo" src={'../imgs/html.jpg'}></img>
				<img alt="javascript logo" src={'../imgs/javascript.jpg'}></img>
			</div>
			<div className="rowImages">
				<img alt="react logo" src={'../imgs/react.jpg'}></img>
				<img alt="node js logo" src={'../imgs/nodejs.jpg'}></img>
				<img alt="github logo" src={'../imgs/github.jpg'}></img>
				<img alt="oracle logo" src={'../imgs/oracle.jpg'}></img>
				<img alt="postgresql logo" src={'../imgs/postgresql.jpg'}></img>
			</div>

                        <div>
				<h5>Operating Systems</h5>
				<div className="rowImages">
					<img alt="windows logo" src={'../imgs/windows.jpg'}></img>
					<img alt="raspberry pi logo" src={'../imgs/raspberry.jpg'}></img>
					<img alt="ubuntu logo" src={'../imgs/ubuntu.jpg'}></img>
				</div>
			</div>
                </div>
        )
}
export default Home