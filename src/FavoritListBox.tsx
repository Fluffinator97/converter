import React from 'react'
import CurrencyOptions from './CurrencyOptions'


interface Props{
    fromCurrency: 'string',
    toCurrency:'string',
    addItem: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function Favorit(props: Props) {

    return (
        <div>
            <button onClick={props.addItem}>Add</button>
            <div style={boxStyling} className="favoritBox">
                <div style={bindingBox}>
                    <header style={boxHeader}>Favorits</header>
                    {/*  <button style={buttonStyling} itemID='openCurrencyList' >Add Favorit</button> */}
                </div>
                <ul id='favoritList'>
    <li>{props.fromCurrency} vs {props.toCurrency}</li>
                </ul>
            </div>
        </div>
    )
}


const countryList: React.CSSProperties = {

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
    width: '100%',
    backgroundColor: 'pink',
    textAlign: 'center',
}

const bindingBox: React.CSSProperties = {
    display: 'flex'
}