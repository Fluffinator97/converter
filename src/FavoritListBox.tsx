import React from 'react'

export default function Favorit() {
    return (
        <div style={boxStyling} className="favoritBox">
            <div>
                <button style={boxHeader} >Add Favorit</button>
            </div>
            <ul id='favoritList'>
                <li>
                </li>
            </ul>
        </div>
    )
}

const boxStyling: React.CSSProperties = {
    padding: 0,
    margin: 0,
    height: 200,
    backgroundColor: 'black'
}

const boxHeader: React.CSSProperties = {
    padding: 0,
    margin: 0,
    height: 40,
    width: '100%',
    backgroundColor: 'pink',
}