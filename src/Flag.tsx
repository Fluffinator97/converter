import React from 'react'

interface Props {
flagImage: string
}

export default function Flag(props: Props) {
    return (
        <div>
        <img style={flagStyle} src={props.flagImage} alt=''/>
        </div>
    )
}

const flagStyle: React.CSSProperties = {
    width: '3rem',
    height: '3rem',
    objectFit: 'fill',
    borderRadius: '50%'
 }