import React from 'react'
import {ImageSlides} from './ImageSlides'
import Contribution from './Contribution'
import TechStack from './TechStack'
import './Project.css'

class Project extends React.Component{
        constructor(props){
                super(props);
                this.project = props.project
                
                this.Img16x9 = {
                        width: '45vw'
                }
	}

        render() {
                if (this.project.key % 2 === 0){
                        return(
                                <div className="Project">
                                        <h3 id={this.project.id}>{this.project.title}</h3>
                                        <hr></hr>
                                        <div className="linkContainer">
                                                <p>{this.project.link_title}</p>
                                                <strong><a href={this.project.link} target="_blank" rel="noopener noreferrer">{this.project.link}</a></strong>
                                        </div>
                                        <ImageSlides contentArray={this.project.content} imageStyle={this.Img16x9} />
        
                                        <div className="Row">
                                                <div className="TechStack">
                                                        <h5>Tech Stack</h5>
                                                        <hr></hr>
                                                        <div className="TechStackList">
                                                                {this.project.tech_stack.map(function(tech, index){
                                                                        return (<TechStack key={index} tech={tech}/>)
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={(this.project.key_contributions.length !== 0) ? "Contributions":"noContributions"}>
                                                        <h5>Key Contributions</h5>
                                                        <hr></hr>
                                                        <div >
                                                                {this.project.key_contributions.map(function(contribution, index){
                                                                        return (<Contribution key={index} key_contribution={contribution}/>)
                                                                })}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        );
                } else {
                        return(
                                <div className="Project">
                                        <h3 id={this.project.id}>{this.project.title}</h3>
                                        <hr></hr>
                                        <div className="linkContainer">
                                                <p>{this.project.link_title}</p>
                                                <strong><a href={this.project.link} target="_blank" rel="noopener noreferrer">{this.project.link}</a></strong>
                                        </div>
                                        <ImageSlides contentArray={this.project.content} direction={"Left"} imageStyle={this.Img16x9} />
        
                                        <div className="Row">
                                                <div className={(this.project.key_contributions.length !== 0) ? "Contributions":"noContributions"}>
                                                        <h5>Key Contributions</h5>
                                                        <hr></hr>
                                                        <div>
                                                                {this.project.key_contributions.map(function(contribution, index){
                                                                        return (<Contribution key={index} key_contribution={contribution}/>)
                                                                })}
                                                        </div>
                                                </div>
                                                <div className="TechStack">
                                                        <h5>Tech Stack</h5>
                                                        <hr></hr>
                                                        <div className="TechStackList">
                                                                {this.project.tech_stack.map(function(tech, index){
                                                                        return (<TechStack key={index} tech={tech}/>)
                                                                })}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        );
                }
        }  
}

export default Project;