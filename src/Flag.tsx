import React from 'react'

interface Props {
    flagImage: string


}

export default function Flag(props: Props) {
    return (
        <div style={container}>
            <img style={flagStyle} src={props.flagImage} alt='' />
        </div>
    )
}

const container: React.CSSProperties = {
    width: '3rem',
    height: '2rem',
}
const flagStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    //border: '1px solid #021a40'

}