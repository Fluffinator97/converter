import React from 'react'


fetch('https://api.exchangeratesapi.io/latest')

export default function Favorit() {
    return (
        <div>
            <div style={currencyList}></div>
            <div style={boxStyling} className="favoritBox">
                <div style={bindingBox}>
                    <header style={boxHeader}>Favorits</header>
                    <button style={buttonStyling} itemID='openCurrencyList' >Add Favorit</button>
                </div>
                <ul id='favoritList'>
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    )
}


const currencyList: React.CSSProperties = {

    padding: 0,
    margin: 0,
    height: 300,
    width: 500,
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    overflow: 'scroll',
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