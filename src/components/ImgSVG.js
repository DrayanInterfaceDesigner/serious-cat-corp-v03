import React from "react";

const ImgSVG = (src, id = '', className = '', alt = '') => {
    if(!src) return console.error('YOU MUST PROVIDE AN IMAGE SOURCE.');
    if(!id || id === '') {
        if(className !== '') return (<img src={src} className={className} alt={alt}></img>)
        return (<img src={src} alt={alt}></img>)
    }
    else if(!className || className === '') return (<img src={src} id={id} alt = {alt}></img>)
    else if (id && className) return (<img src={src} id={id} className={className} alt = {alt}></img>)
}

export default ImgSVG