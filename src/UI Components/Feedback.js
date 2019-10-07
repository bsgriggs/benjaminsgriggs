import React from 'react'
import './Feedback.css'

const Feedback = () => {

    let mailString = "mailto:benjaminsgriggs@gmail.com?subject=BenjaminSGriggs%20Website%20Feedback"

    function mailTo() {
        window.location.href = mailString;
    }

    return(
        <div className="Feedback">
            <h3>Feedback Contact</h3>
            <hr></hr>
            <div className="Row">
                <div className="FeedbackInfo">
                    <div className="emailLink"><i className="fas fa-2x fa-envelope" onClick={mailTo}> Email</i></div>
                    <p>
                        Your feedback is always appreciated! You can send any comments, questions, or concerns regarding this website to: <strong><a href={mailString} onClick={mailTo}>benjaminsgriggs@gmail.com</a></strong>.
                    </p>
                </div>           
            </div>
        </div>
    );
}

export default Feedback