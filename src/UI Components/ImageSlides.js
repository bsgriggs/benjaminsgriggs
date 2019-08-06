import React from 'react'
import FramedImage from './FramedImage'
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
        this.fullscreen = this.fullscreen.bind(this);
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

    fullscreen(){
        window.open(this.contentArray[this.index].img);
    }

 	//trigger exact to behavior for NavLink Benjamin Griggs when a sub NavLink is active
  	render() {
        if(this.direction === "Left"){
            return(
                <div className="slideRow" onLoad={this.setString}>
                    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
                    <div className="imageInstance" >
                        <FramedImage image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <div className={this.index === 0 ? 'NA' : ''}> <i id={"btnL"} onClick={this.indexLeft}  className="fas fa-4x fa-caret-left"></i> </div>
                        <div className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}> <i id={"btnR"} onClick={this.indexRight}  className="fas fa-4x fa-caret-right"></i> </div>
                        <div className={"fullscreen"}><i onClick={this.fullscreen} className={"fas fa-2x fa-expand"}></i> </div>
                    </div>
                    <p id={"discription"}>{this.contentArray[this.index].description}</p>
                </div>
            );
        } else {
            return(
                <div className="slideRow" onLoad={this.setString}>
                    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
                    <p id={"discription"}>{this.contentArray[this.index].description}</p>
                    <div className="imageInstance">
                        <FramedImage  image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <div className={this.index === 0 ? 'NA' : ''}> <i id={"btnL"} onClick={this.indexLeft}  className="fas fa-4x fa-caret-left"></i> </div>
                        <div className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}> <i id={"btnR"} onClick={this.indexRight}  className="fas fa-4x fa-caret-right"></i> </div>
                        <div className={"fullscreen"}><i onClick={this.fullscreen} className={"fas fa-2x fa-expand"}></i> </div>
                    </div>
                </div>
            );
        }
    }  
}

