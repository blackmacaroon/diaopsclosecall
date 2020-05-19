import React from "react";

function details(){
    console.log("peekaboo")
}

export default function Map(){
    return(
        <map className="denMap" name="denMap">
            <area shape="poly" coords="33, 100, 12, 140" alt="runway" onClick={details(this)}/>
        </map>
    )
}