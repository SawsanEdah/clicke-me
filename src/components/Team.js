import React, { Component } from "react";
import MemberInfo from "./MemberInfo";
import TeamMember from "./TeamMember";
class Team extends Component{
  constructor(){
    super()
    this.state={
      memberinfo : MemberInfo,
      newArray : [],
      count : 0
    }
    this.clickEvent=this.clickEvent.bind(this)
  }  
  clickEvent(){
    if(this.state.count<this.state.memberinfo.length){
      this.state.newArray.push(this.state.memberinfo[this.state.count])
      this.setState(prevState=>{
        return {count: prevState.count+1}
      })
         
      this.info=this.state.newArray.map(member=> <TeamMember
        key={member.id}
        img={member.image}
        name={member.name}
        position={member.position}
        email={member.email}
        tel={member.tel}
        website={member.website}
        />)

    }

  }

 




    render(){
      
        return(<>
        <div className="container my-5">
        <div className="row">
          <button className="btn btn-warning" onClick={this.clickEvent}>click me!</button>
          {this.info}
          



         </div>

        </div>
      




        </>)
    }
}


export default Team;