import React from 'react'
import CircularProgressBar from './CircularProgressBar'
import './Skill.css'

class Skill extends React.Component{
        constructor(props){
                super(props);
                this.skill = props.skill
        }
        render(){
                return(
                        <div className="Skill"> 
                                <img alt={this.skill.img} src={`../imgs/${this.skill.img}`}></img>
                                <CircularProgressBar sqSize={100} strokeWidth={10} percentage={this.skill.progress}/>
                        </div>
                )
        }
}

export default Skill;