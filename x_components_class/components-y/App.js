import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super()
        this.state={
            number : 100
        }
        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState(prevstate=>{
            return {number : prevstate.number-11}
        })
    } 
    render(){




        return(<>
        
        <h1>{this.state.number}</h1>
        <button onClick={this.clickHandler}>click me!</button>
        
        
        
        </>)
    }
}

export default App;