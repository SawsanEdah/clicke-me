import React from "react";
import SocialItem from "./SocialItem";
function Social(){
    return(
        <ul className="list-group">
            <SocialItem
                media='Facebook'
                id='face'
                imag='https://picsum.photos/id/237/60'
            />
            <SocialItem
                media='Youtube'
                id='you'
                imag='https://picsum.photos/id/237/60'
            />
            <SocialItem
                media='Instagram'
                id='insta'
                imag='https://picsum.photos/id/237/60'
            />
             <SocialItem
                media='Linkedin'
                id='link'
                imag='https://picsum.photos/id/237/60'
            />
            
            
          
    </ul>
    );
};
export default Social;