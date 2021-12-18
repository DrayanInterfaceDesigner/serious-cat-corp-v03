import React from "react";
import Character from "./subcomponents/character"
import CharaterInfo from "./subcomponents/character_info";

const GridMiddleChar = () => {
    return (
        <div className='grid-middle-character'>
            <div className='flex-character'>
                <Character/>
                <CharaterInfo />
            </div>
        </div>
    )
}

export default GridMiddleChar