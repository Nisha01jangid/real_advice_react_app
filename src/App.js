import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("");
  // const []

  useEffect(()=>{
   return setdata();
  }, [])

  const setdata = ()=>{
  //  return window.location.reload(true); 
  axios.get('https://api.adviceslip.com/advice')
  .then(response =>{
    // console.log(response.data.slip);
    setAdvice(response.data.slip.advice);
  })
  .catch(error =>{
    console.log(error);
  })
  }
  return (
    <React.Fragment>
    <div className='main_div'>
    {/* <h1 className='title'>Let's Take Some Good Advice</h1> */}
      <div className='card_div'>
        <h2 className='heading'>{advice}</h2>
         <br></br>
        <button onClick={setdata}>
          <span>Give Me Advice !</span>
        </button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
