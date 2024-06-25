import React from "react";
import EmployeeCard from "./EmployeeCard";
const empArray=[
    
    {img:'https://picsum.photos/250',name:'sawsan',title:'front-end developer',phone:2245,email:'sawsa@89',website:'sawsan.com'},
    {img:'https://picsum.photos/250',name:'salim',title:'back-end developer',phone:2865,email:'salim@39',website:'salim.com'},
    {img:'https://picsum.photos/250',name:'abeer',title:'graphic designer',phone:6879,email:'abeer@89'},
    {img:'https://picsum.photos/250',name:'ali',title:'wordpress-developer',phone:7845,email:'ali@89',website:'ali.com'}]


function Employee(){
    return(
       
        <div className="row mx-0">
        {empArray.map((e)=>{
            return(
         
                
                    <div className="col-md-3">
                       
            <EmployeeCard img={e.img} name={e.name} title={e.title} phone={e.phone} email={e.email} website={e.website}/>
                    
                    </div>
                
                
            )
        })}
        </div>
        
    );
}
export default Employee;