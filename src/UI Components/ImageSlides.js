import React from 'react'
import FramedImage from './FramedImage'
import Left from '../imgs/Left.png'
import Right from '../imgs/Right.png'
import './ImageSlides.css'

export class ImageSlides extends React.Component{
	constructor(props){
		super(props);
        this.contentArray = props.contentArray;
        this.index = 0;
        this.string =  "";
        this.direction = props.direction;

        //other methods
        this.indexLeft = this.indexLeft.bind(this);
        this.indexRight = this.indexRight.bind(this);
        this.setString = this.setString.bind(this);
    }

    setString(){
        if (this.contentArray.length === 1){
            return;
        }
        else{
            this.string = " " + (this.index + 1) +"/"+this.contentArray.length; 
            this.forceUpdate();
        }
    }

    indexLeft(){
        if ( this.index === 0){ return; }
        this.index--;
        this.forceUpdate();
    }
    indexRight(){
        if (this.index === (this.contentArray.length - 1)){  return; }
        this.index++;
        this.forceUpdate();
    }

 	//trigger exact to behavior for NavLink Benjamin Griggs when a sub NavLink is active
  	render() {
        if(this.direction === "Left"){
            return(
                <div className="slideRow" onLoad={this.setString}>
                    <div className="imageInstance">
                        <FramedImage image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <img id={"btnL"} src={Left} alt={"Left"} onClick={this.indexLeft} className={this.index === 0 ? 'NA' : ''}></img>
                        <img id={"btnR"} src={Right} alt={"Right"} onClick={this.indexRight} className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}></img>
                    </div>
                    <p id={"discription"}>{this.contentArray[this.index].description}</p>
                </div>
            );
        } else {
            return(
                <div className="slideRow" onLoad={this.setString}>
                    <p id={"discription"}>{this.contentArray[this.index].description}</p>
                    <div className="imageInstance">
                        <FramedImage image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <img id={"btnL"} src={Left} alt={"Left"} onClick={this.indexLeft} className={this.index === 0 ? 'NA' : ''}></img>
                        <img id={"btnR"} src={Right} alt={"Right"} onClick={this.indexRight} className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}></img>
                    </div>
                </div>
            );
        }
    }  
}

