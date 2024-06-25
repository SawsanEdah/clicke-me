import React from "react";


function EmployeeCard(props){
 
    return(
        <div className="card bg-dark text-white text-center">
            
           
            <div className="card-header">
            <img src={props.img} alt="employee"/>
            </div>
            <div className="card-body"
            style={{backgroundcolor: props.website ? 'black':'white'}}>
            
            <h3>{props.name}</h3>
            <h4>{`${props.title}`}</h4>
            <h5>{`phone nember: ${props.phone}`}</h5>
            <h5>{`email: ${props.email}`}</h5>
            <h5 >{`website: ${props.website}`}</h5>
            </div>
        </div>

    );
}
export default EmployeeCard;