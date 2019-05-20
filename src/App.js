import React from 'react';
import Header from './Header';
import './App.css';

function App(){
  const sayHello = () => {
    window.alert("hello");
  };


  return(
    <div className="App">
        <Header />
        <div className="Body">
          <h1>Hello React</h1>
          <a className="twitter-timeline" href="https://twitter.com/griggsBenjamin1?ref_src=twsrc%5Etfw">Tweets by griggsBenjamin1</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
          <button onClick={sayHello}>Hello</button> 
        </div>
    </div>
  );
}

export default App;