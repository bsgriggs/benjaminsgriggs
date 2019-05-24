import React from 'react'
import './FramedImage.css'

export class FramedImage extends React.Component {
    render() {
        return(
            <div>
                <div className="Frame">
                 <img src={this.props.image} alt={this.props.alt}></img>
                <p>{this.props.caption}</p>   
                </div>
            </div>
        );
    }
}