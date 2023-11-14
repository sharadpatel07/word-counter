import React, { useState } from 'react'
import './App.css';

function App() {

  let [text, setText] = useState("");
  let [wordcount, setWordcount] = useState(0);
  let [count, setcount] = useState(0);

  let handleonchange = (event) => {
      setText(event.target.value);
      setWordcount(text.split(" ").length);
      setcount(0.008 * 60 * text.split(" ").length);
    }

  let Clearfun=()=>{
      setText("");
      setWordcount(0);
      setcount(0);
  }
  
  return (
    <>
      <div className="container">

        <span className="head1">WoRd</span>
        <span className="head2">CoUNTeR</span>
        <textarea cols='40' rows='12' value={text} onChange={handleonchange} className='comment'></textarea>
        <button className="btn" onClick={Clearfun}>Clear Now</button>
      </div>

      <div className='container2'>
        <span className='span1'>No. of character: <span className='span4'>{text.length}</span></span>
        <span className='span2'>No. of words: <span className='span4'>{wordcount}</span></span>
        <span className='span3'>Time to read para: <span className='span4'>{count} second</span> </span>
      </div>
    </>
  );
}

export default App;
