import React from 'react'
import PageNavElement from './PageNavElement'
import './PageNav.css'

class PageNav extends React.Component{
        constructor(props){
                super(props);
                this.NavTitles = props.NavTitles
                this.NavIDs = props.NavIDs        
                
                this.slideMenu = this.slideMenu.bind(this)
        }
        
        slideMenu(){
		const menu = document.getElementById("NavMenu");
		menu.classList.toggle("Left");
		menu.classList.toggle("Right");
	}

        render() {
                const NavIDs = this.NavIDs
                return(
                        <div id="NavMenu" className="PageNav_Outer Left" onClick={this.slideMenu} >
                                <p>Scroll to Project:</p>
                                <div className="PageNav_Inner">
                                        <i className="fas fa-bars"></i>
                                        {this.NavTitles.map(function(nav, index){
                                                return (<PageNavElement key={index} Title={nav} ID={NavIDs[index]}/>)
                                        })}
                                </div>
                          
                        </div>
                );
        }  
}

export default PageNav;