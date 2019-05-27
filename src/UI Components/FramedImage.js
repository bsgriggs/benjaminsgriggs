import React from 'react'
import './FramedImage.css'

const FramedImage = (props) =>{
    const { image, alt, caption } = props;
    return(
        <div>
            <div className="Frame">
                <img src={image} alt={alt}></img>
                <p>{caption}</p>   
            </div>
        </div>
    );
}

export default FramedImage;