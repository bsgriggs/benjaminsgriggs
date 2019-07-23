import React from 'react';
import './Card.css';

const Card = (props) =>{
    const { image, alt, caption, click, style } = props;
    return(
        <div className="Card" style={style}>
            <img src={image} alt={alt}></img>
            <p>{caption}</p>
            <button onClick={click}></button>
        </div>
    );
}

export default Card