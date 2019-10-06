import React from 'react'
import './FramedImage.css'

const FramedImage = (props) =>{
    const { image, alt, caption, styles, click } = props;

    return(
        <div onClick={click} className={click ? 'Clickable' : 'notClickable'}>
            <div className="Frame" style={styles}>
                <img src={image} alt={alt}></img>
                <p>{caption}</p>   
            </div>
        </div>
    );
}

export default FramedImage;