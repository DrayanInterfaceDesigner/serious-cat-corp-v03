import React from "react";
import ImgSVG from "./ImgSVG";
import ImgParse from "./ImgParser";
import scclogo from "../model/elements/scc-logo.svg"



const GridTop = () => {
    return (
        <div className='grid-top'>
            <div className='flex-top'>
                {ImgSVG(ImgParse(scclogo), 'logo')}
                <div className="wrapper">
                    {ImgSVG(`${process.env.PUBLIC_URL}/images/svg/sound-on.svg`, 'sound-btn')}
                    {ImgSVG(`${process.env.PUBLIC_URL}/images/svg/music-off.svg`, 'music-btn')}
                </div>
            </div>
        </div>
    )
}


export default GridTop