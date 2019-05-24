import React from 'react';
import logo from './BenjaminSGriggs.svg';
import './Header.css';

export class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isAbout: true,
      isTwitter:false,
      isMinecraft:false,
      isFeedback:false
    }
  }

  clickA(){
    this.setState({ 
      isAbout: true,
      isTwitter:false,
      isMinecraft:false,
      isFeedback:false
    });
  }

  clickT(){
    this.setState({ 
      isAbout: false,
      isTwitter:true,
      isMinecraft:false,
      isFeedback:false
    });
  }

  clickM(){
    this.setState({ 
      isAbout: false,
      isTwitter:false,
      isMinecraft:true,
      isFeedback:false
    });
  }

  clickF(){
    this.setState({ 
      isAbout: false,
      isTwitter:false,
      isMinecraft:false,
      isFeedback:true
    });
  }


  render() {
    return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <div className={this.state.isAbout ? "active" : null} onClick={this.clickA.bind(this)} ><p>About</p></div>
      <div className={this.state.isTwitter ? "active" : null} onClick={this.clickT.bind(this)}><p>Twitter</p></div>
      <div className={this.state.isMinecraft ? "active" : null} onClick={this.clickM.bind(this)}><p>Minecraft Server</p></div>
      <div className={this.state.isFeedback ? "active" : null} onClick={this.clickF.bind(this)}><p>Feedback</p></div>
    </div>
  );
  }
}
