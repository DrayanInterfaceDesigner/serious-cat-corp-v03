import React from "react";
import InfoLane from "./info_lane";
import InfoLaneOCC from "./info_lane_occ";

const CharacterInfo = ()=>{
    return (
        <div className='character-info'>
            {InfoLane('name', 'NoCat Nobody')}
            <div>
                <p id="description">“Cat's descriptions was never big enough, so we made them small.”</p>
            </div>
            <InfoLaneOCC />
        </div>
    )
}

export default CharacterInfo