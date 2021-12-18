import React from "react";
import InfoLane from "./info_lane";

const InfoLaneOCC = ()=> {
    return (
        <div className='info-lane-occ'>
            {InfoLane('role', 'Role:')}
            <p id="job">JOB: I DO SOMETHING</p>
        </div>
    )
}

export default InfoLaneOCC