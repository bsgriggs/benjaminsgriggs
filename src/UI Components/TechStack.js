import React from 'react'
import './TechStack.css'

class TechStack extends React.Component{
        constructor(props){
		super(props);

                this.tech = props.tech
	}

        render() {
                return(
                        <div className="Tech">
                                <img src={`../imgs/${this.tech.img}`} alt={this.tech.img}></img>
                        </div>
                );
        }  
}

export default TechStack;