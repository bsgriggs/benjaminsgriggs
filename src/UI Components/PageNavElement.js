import React from 'react'
import './PageNavElement.css'

class ProjectsNavElement extends React.Component{
        constructor(props){
                super(props);
                this.Title = props.Title 
                this.ID = props.ID     
                
                this.clickNavElement = this.clickNavElement.bind(this)
        }
        
        clickNavElement(){
                const element = document.getElementById(this.ID);
                element.scrollIntoView({
                        behavior: "smooth"
                })
        }

        render() {
                const title = this.Title
                return(
                        <p className="NavElement" onClick={this.clickNavElement}>{title}</p>
                );
        }  
}

export default ProjectsNavElement;