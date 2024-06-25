import React, { Component } from 'react';


class TeamMember extends Component{






    render(){
        return(<>
        <div className='card border-0 text-center col-md-4 col-sm-6'>
            <div className='card-header'>
                <img style={{width:"250px",height:'250px'}} src={this.props.img} alt=''/>
                
            </div>
            <div className='card-body'>
                <h2>name :{this.props.name} </h2>
                <h2>Position :{this.props.position}</h2>
                <h2>email :{this.props.email}</h2>
                <h2>Tel :{this.props.tel}</h2>
                <h2>website :{this.props.website}</h2>
            </div>

        </div>
        
        
        
        
        
        </>)
    }
}


export default TeamMember;