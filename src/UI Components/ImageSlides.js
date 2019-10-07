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
        this.fullWidth = {"maxWidth": "100%", "width": "100%"};
        this.paragraphs = this.expandDescription();
        this.imageStyle = props.imageStyle;

        //other methods
        this.indexLeft = this.indexLeft.bind(this);
        this.indexRight = this.indexRight.bind(this);
        this.setString = this.setString.bind(this);
        this.fullscreen = this.fullscreen.bind(this);
        this.expandDescription = this.expandDescription.bind(this);
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
        this.expandDescription();
        this.forceUpdate();
    }
    indexRight(){
        if (this.index === (this.contentArray.length - 1)){  return; }
        this.index++;
        this.expandDescription();
        this.forceUpdate();
    }

    fullscreen(){
        window.open(this.contentArray[this.index].img);
    }

    expandDescription(){   
        let split = [];
        if(this.contentArray[this.index].description === "" || !this.contentArray[this.index].description){
            this.paragraphs = split;
        } else {
            let currentDescription = this.contentArray[this.index].description;
            let descriptionSplit = currentDescription.split("\n");
    
            for (let i = 0; i < descriptionSplit.length; i++){
                split.push( <p key={i}>{descriptionSplit[i]}</p>);
            }
            this.paragraphs = split;
        }
        return split;
    }

 	//trigger exact to behavior for NavLink Benjamin Griggs when a sub NavLink is active
  	render() {
        if(this.contentArray[this.index].description === "" || !this.contentArray[this.index].description){
            return(
                <div onLoad={this.setString}>
                    <div className="imageInstance" style={this.fullWidth}>
                        <FramedImage image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <div className={this.index === 0 ? 'NA' : ''}> <i id={"btnL"} onClick={this.indexLeft}  className="fas fa-4x fa-caret-left"></i> </div>
                        <div className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}> <i id={"btnR"} onClick={this.indexRight}  className="fas fa-4x fa-caret-right"></i> </div>
                        <span className={"fullscreen"}><i onClick={this.fullscreen} className={"fas fa-2x fa-expand"}></i> </span>
                    </div>
                </div>
            );
        }else if(this.direction === "Left"){
            return(
                <div className="Row" onLoad={this.setString}>
                    <div className='imageInstance' style={this.imageStyle}>
                        <FramedImage image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <div className={this.index === 0 ? 'NA' : ''}> <i id={"btnL"} onClick={this.indexLeft}  className="fas fa-4x fa-caret-left"></i> </div>
                        <div className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}> <i id={"btnR"} onClick={this.indexRight}  className="fas fa-4x fa-caret-right"></i> </div>
                        <span className={"fullscreen"}><i onClick={this.fullscreen} className={"fas fa-2x fa-expand"}></i> </span>
                    </div>
                    <div>
                        {this.paragraphs}
                    </div>
                    
                </div>
            );
        } else {
            return(
                <div className="Row" onLoad={this.setString}>
                    <div>
                        {this.paragraphs}
                    </div>
                    <div className='imageInstance' style={this.imageStyle}>
                        <FramedImage  image={this.contentArray[this.index].img} alt={this.contentArray[this.index].caption} caption={this.contentArray[this.index].caption + this.string} />
                        <div className={this.index === 0 ? 'NA' : ''}> <i id={"btnL"} onClick={this.indexLeft}  className="fas fa-4x fa-caret-left"></i> </div>
                        <div className={this.index === (this.contentArray.length - 1) ? 'NA' : ''}> <i id={"btnR"} onClick={this.indexRight}  className="fas fa-4x fa-caret-right"></i> </div>
                        <span className={"fullscreen"}><i onClick={this.fullscreen} className={"fas fa-2x fa-expand"}></i> </span>
                    </div>
                </div>
            );
        }
    }  
}

