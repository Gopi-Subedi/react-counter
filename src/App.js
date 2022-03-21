import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const decrementHandler = (e) => {
    e.preventDefault();
    count ? setCount(count - 1) : console.log('Count is empty!');
  };
  return (
    <div className="app-container">
      <div className="app-content">
        <div className="header">React Counting Interface</div>
        <div className="body">
          <button className="btn-substract" onClick={decrementHandler}>
            -
          </button>
          <p className="result">{count}</p>
          <button className="btn-add" onClick={(e) => setCount(count + 1)}>
            +
          </button>
        </div>
        <button className="btn-reset" onClick={(e) => setCount(0)}>
          reset
        </button>
        <div className="count-rlt">
          <p>Count</p>
          <p className="result">{count}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
