import React from 'react';
import { Header } from './Header';
import { FramedImage } from './FramedImage'
import professionalPic from './imgs/professionalPicTrim.jpg'
import './App.css';

export class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Header/>
      <div className="Body">
        <a className="twitter-timeline" href="https://twitter.com/griggsBenjamin1?ref_src=twsrc%5Etfw">Tweets by griggsBenjamin1</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
        <button onClick={() => {alert("Hello")}}>Hello</button>
        <FramedImage image={professionalPic} alt={"Me"} caption={"Hello, its me."}/>
      </div>
  </div>
    );
  }
}