import React, {Component} from "react";

class File extends Component{
    // method(lname){
    //     return <span>{lname}</span>
    // }
    render(){
        // const fname='nour';
        // const lname=this.method('homsi')
        return(
            <h1>{this.props.fname} {this.props.lname}</h1>
        );
    }
}
export default File;