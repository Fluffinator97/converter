import React from 'react';
import artWork from "./assets/18920.png";


export default function Image() {
    return (
       <img style={imageStyle} src={artWork} alt=""/>

    )
}

const imageStyle: React.CSSProperties ={
    width: '100%',
    

}

