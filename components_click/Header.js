import React from 'react';
  function Header(){
    const client="Programmer";
    const title={
      designer:"Design",
      programmer:"Programming"
    }
    const info={
      name:"sawsan",
      neck:"edah"
    }
  
    return(
       <div className=' bg-dark rounded text-white'>
        <h3>Hello {`${info.name} ${info.neck}`}</h3>
         <h2>
           {client==="Designer"? title.designer:title.programmer} is my life
         </h2>
         
       </div>
    );
  };
  export default Header;