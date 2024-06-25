import React,{Component} from "react";
import TeamMember from "./TeamMember";
import Info from "./Info";
 class Team extends Component {
   constructor(){
      super()
      this.state={
         info : Info  
      }
    
   }
   mapping(x){
      const members= x.map(member=> <TeamMember
          key={member.id}
          img={member.img}
          name={member.name}
          position={member.position}
          phone={member.phone}
          email={member.email}
          website={member.website}
 
 
       />
    )
          return members;
    }
    
   


  
   render(){
     
      return(
         <div className="row">
            {this.mapping(this.state.info)}
          
          </div>  );
        
   }
 }
 export default Team;