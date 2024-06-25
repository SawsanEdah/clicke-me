import React, { Component } from 'react';
import Header from './Header';
import Social from './Social';
import Text from './Text';
import '../App.css'
import Employee from './Employee';
// import Team from './Team';
import Team from './Team-click';



class App extends Component {
   render(){
      return(
         <div className='container'>
            <Header/>
           <Text/>
           <Employee/> 
           <Team/>
           <Social/>  
          
          </div>
       );
   }

}

export default App;
