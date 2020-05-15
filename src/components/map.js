import React from "react";

function details(){
    console.log("peekaboo")
}

export default function Map(){
    return(
        <map className="denMap" name="denMap">
            <area shape="poly" coords="33, 39, 44, 55, 66, 77, 100, 140" alt="runway" onClick={details(this)}/>
        </map>
    )
}