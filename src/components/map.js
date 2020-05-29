import React from "react";


function details(){
    console.log("peekaboo")
}

export default function Map(){
    return(
        <>
            <img className="map" src="denmap.png" alt="map of den pavement areas" usemap="#denMap"/>
            <map className="denMap" name="denMap" width="500">
                <area shape="poly" coords="0, 0, 89, 140" alt="34R" title="34R" onClick={details(this)}/>
                <area shape="poly" coords="10, 10, 89, 140" alt="34L" title="34L" onClick={details(this)}/>
                <area shape="poly" coords="50, 50, 89, 340" alt="35R" titlee="35R" onClick={details(this)}/>
                <area shape="poly" coords="200, 200, 389, 540" alt="35L" title="35L" onClick={details(this)}/>
                <area shape="poly" coords="300, 300, 389, 540" alt="otherrunway" title="otherrunway"onClick={details(this)}/>
                <area shape="poly" coords="400, 400, 389, 540" alt="otherotherrunway" title="otherotherrunway" onClick={details(this)}/>
            </map>
            <p>depending on the moused-over (on tablet, touched?) pavement area, this will tell what the closure is for, it's duration, etc. </p>
        </>
    )
}