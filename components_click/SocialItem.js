import React from "react";
function SocialItem(props){

    return(<>
       <li className="list-group-item">
        <img src={props.imag} alt={`icon of ${props.media}`}/>
            <input id={props.id} type="checkbox"/>
            <label htmlFor={props.id} >{props.media}</label>
        </li>
    </>);
}
export default SocialItem;