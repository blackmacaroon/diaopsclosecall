import React from "react";

function details(){
    console.log("peekaboo")
}

export default function Map(){
    return(
        <map id= "denMap" name="denMap">
            <area shape="rect" coords="33, 100, 712, 940" alt="runway" onClick={details(this)}/>
        </map>
    )
}