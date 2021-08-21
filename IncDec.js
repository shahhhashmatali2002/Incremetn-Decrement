import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function IncDec() {

  const [num,setnum] = useState(0)
  const Increment = () =>{
    setnum(num + 1)
  };
  const Decrement = () =>{
    setnum(num - 1)
  };

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <h1 className='mt-5'>{num}</h1>
          <button className='button1 mt-5' onClick={Increment}><i class='bx bx-chevrons-up'></i></button>
          <button className='button2' onClick={Decrement}><i class='bx bx-chevrons-down'></i></button>
        </div>
      </div>
    </>
  );
}

export default IncDec;
