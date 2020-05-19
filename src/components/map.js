import React from "react";

function details(){
    console.log("peekaboo")
}

export default function Map(){
    return(
        <map id= "denMap" name="denMap">
            <area shape="poly" coords="33, 53, 35, 100, 712, 940" alt="runway" onClick={details(this)}/>
            {/* <area shape="poly" coords="133, 153, 115, 200, 612, 840" alt="runway" onClick={details(this)}/>
            <area shape="poly" coords="233, 253, 230, 300, 512, 740" alt="runway" onClick={details(this)}/>
            <area shape="poly" coords="333, 353, 345, 400, 412, 640" alt="runway" onClick={details(this)}/>
            <area shape="poly" coords="433, 453, 460, 500, 312, 540" alt="runway" onClick={details(this)}/>
            <area shape="poly" coords="533, 553, 700, 600, 212, 440" alt="runway" onClick={details(this)}/> */}
        </map>
    )
}