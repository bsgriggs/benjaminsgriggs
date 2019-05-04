import React from 'react';
import Header from './Header';

function App(){
  const sayHello = () => {
    window.alert("hello");
  };


  return(
    <div>
        <Header />
        <h1>Hello React</h1>
        <a class="twitter-timeline" href="https://twitter.com/griggsBenjamin1?ref_src=twsrc%5Etfw">Tweets by griggsBenjamin1</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
        <button onClick={sayHello}>Hello</button>
    </div>
  );
}

export default App;