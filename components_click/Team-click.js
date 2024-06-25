import React,{Component} from "react";
import TeamMember from "./TeamMember";
import Info from "./Info";
 class Team extends Component {
   constructor(){
      super()
      this.state={
         info : Info ,
         i    :0,
         newArray:[]
      }
      this.clickEvent=this.clickEvent.bind(this)
   }
    
   clickEvent(){
     if(this.state.i<this.state.info.length){
      this.state.newArray.push(this.state.info[this.state.i])
      this.setState(prevState=>{
         return {i: prevState.i+1}
      })
      this.arraymap=this.state.newArray.map(member=>{
         return <TeamMember
         key={member.id}
         img={member.img}
         name={member.name}
         position={member.position}
         phone={member.phone}
         email={member.email}
         website={member.website}


      />
      })
     }
     }
      
   


  
   render(){
     
      return(
         <div className="row">
            <button className="btn btn-primary" onClick={this.clickEvent}>click me!</button>
            {this.arraymap}
          </div>  );
        
   }
}
 export default Team;