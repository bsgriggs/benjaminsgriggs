import React from 'react'
import './FramedImage.css'

const FramedImage = (props) =>{
    const { image, alt, caption, styles, click } = props;

    function fullscreen(){
        window.open(image);
    }

    return(
        <div onClick={click} className={click ? 'Clickable' : 'notClickable'}>
            <div className="Frame" style={styles}>
                <div className="imageFrame">
                    <img src={image} alt={alt}></img>
                    <span className={"fullscreen"}><i onClick={fullscreen} className={"fas fa-2x fa-expand"}></i> </span>
                </div>
                <p>{caption}</p>   
            </div>
        </div>
    );
}

export default FramedImage;