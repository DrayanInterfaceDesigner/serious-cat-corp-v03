import React from "react";
import ImgSVG from "../ImgSVG";
import doublebars from "../../model/elements/double-bars.svg"

const InfoLane  = (id, txt)=> {
    return (
        <div className="info-lane">
            {ImgSVG(doublebars, null, 'double-bars')}
            <p id={id}>{txt}</p>
        </div>
    )
}

export default InfoLane