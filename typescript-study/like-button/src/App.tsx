import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

// span要素をユーザがクリックすると
// handleClickメソッドが呼び出されてcountの値が1増える


function LikeButton() {
  // countとsetCountという箱を作る
  const [ count, setCount] = useState(0);

  // handleclickというメソッドを作成
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <span className="likeButton" onClick={handleClick}>
      ♡ {count}
    </span>
  );
}

export default App;
