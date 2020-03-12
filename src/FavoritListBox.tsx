import React from 'react'

export default function Favorit() {
    return (
        <div style={boxStyling} className="favoritBox">
            <div style={bindingBox}>
                <header style={boxHeader}>Favorits</header>
                <button style={buttonStyling} >Add Favorit</button>
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
    height: 300,
    width: 500,
    marginLeft:'75%',
    backgroundColor: 'white'
}

const boxHeader: React.CSSProperties = {
    paddingTop: 10,
    margin: 0,
    height: 40,
    width: '80%',
    backgroundColor: 'pink',
    textAlign: 'center',
}

const buttonStyling: React.CSSProperties = {
    margin: 0,
    height: 40,
    width: '20%',
    backgroundColor: 'pink',
    textAlign: 'center',
}

const bindingBox: React.CSSProperties = {
    display: 'flex'
}