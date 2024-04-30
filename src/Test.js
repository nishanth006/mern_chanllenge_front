import React, { useState } from 'react'

const Test = () => {
    const [st,set]=useState(0);
    var x=false;
    function handle(){
        set(st);
        if(x==true)x=false;
        else x=true;
        console.log(x +" x");
    }
  return (
    <div className='container'>
      <button type='button'  className='btn btn-info btn-lg' onClick={handle}>Click</button>
      {st}
    </div>
  )
}

export default Test
