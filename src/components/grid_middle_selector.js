import React from "react";
import renderEntites from "../controller/renderEntities"

const GridMiddleSelector = () => {
    return (
        <div className="grid-middle-selector">
        <div className="flex-selector">
            <div className="selector-parent" id="parent">
            </div>
        </div>
    </div>
    )
}
//Problem: React wasn't waiting the page to load even on promises to catch the DOM.
//Maybe the worst solution i could found, but hey, it works lmao
window.onload = ()=> {renderEntites()}

export default GridMiddleSelector