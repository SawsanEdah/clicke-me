import React from "react";
function Text (){
    const client="Designer";
    const color={
        Designer:"Graphic",
        Programmer:"Web"
    }
    return(
        <p>{client==="Designer"? color.Designer:color.Programmer} and web desgin are far more than a job for me.
            Graphic and web desgin are far more than a job for me.
            Graphic and web desgin are far more than a job for me
            Graphic and web desgin are far more than a job for me
        </p>
    );
};
export default Text;