import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("");
  // const []

  useEffect(()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then(response =>{
      // console.log(response.data.slip);
      setAdvice(response.data.slip.advice);
    })
    .catch(error =>{
      console.log(error);
    },[])
  })

  const setdata = ()=>{
   const Advice = advice; 
  }
  return (
    <React.Fragment>
    <div className='main_div'>
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
