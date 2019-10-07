import React from 'react'
import './Contact.css'
// import FramedImage from '../FramedImage'

// import cookiePile from '../../imgs/cookiesPile.jpg'

import LinkedIn from '../../imgs/linkedin.jpg'
import Facebook from '../../imgs/facebook.jpg'
import Twitter from '../../imgs/twitter.jpg'
import GitHub from '../../imgs/github.jpg'

const Contact = () => {

    let mailString = "mailto:benjaminsgriggs@gmail.com"

    function mailTo() {
        window.location.href = mailString;
    }

    function linkedin(){
        window.open('https://www.linkedin.com/in/benjamin-griggs/', '_blank');
    }

    function facebook(){
        window.open('https://www.facebook.com/benjamin.griggs.336?ref=bookmarks', '_blank');
    }

    function twitter(){
        window.open('https://twitter.com/griggsBenjamin1', '_blank');
    }

    function github(){
        window.open('https://github.com/bsgriggs/', '_blank');
    }

    return(
        <div className="Contact">
            <h3>Business Contact</h3>
            <hr></hr>
            <div className="Row">
                <div className="ContactInfo">              
                    <div className="emailLink"><i className="fas fa-2x fa-envelope" onClick={mailTo}> Email</i></div>
                    <p>
                        For business concerns, you can reach out to me via my primary email address: <strong><a href={mailString} onClick={mailTo}>benjaminsgriggs@gmail.com</a></strong>. Alternatively, you can find me on social media my clicking the provided icons.
                    </p>
                    
                </div>            
                <div className="MediaImages">
                    <img className="Clickable" alt="LinkedIn" src={LinkedIn} onClick={linkedin}></img>
                    <img className="Clickable" alt="Facebook" src={Facebook} onClick={facebook}></img>
                    <img className="Clickable" alt="Twitter" src={Twitter} onClick={twitter}></img>
                    <img className="Clickable" alt="GitHub" src={GitHub} onClick={github}></img>
                </div>
            </div>
            {/* <div>
                <h3>Cookies!</h3>
                <hr></hr>
                <div className="Row">
                    <div className="Img4x3">
                        <FramedImage image={cookiePile} alt={"My Homemade Cookies"} caption={"My Homemade Cookies"}/>
                    </div>
                    <div>
                        <h4>Ingredients</h4>
                        <h4>Procedure</h4>
                    </div>	
                </div>
            </div> */}
        </div>
    );
}

export default Contact