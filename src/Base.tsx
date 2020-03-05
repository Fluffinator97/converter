import React from 'react'
import CurrencyOptions from './CurrencyOptions'

export default function Base() {
    return (
        <div>
            <h1 style={title}>Currency Convertor</h1>
            <p></p>
            <CurrencyOptions />
            <nav>
                <li>Home</li>
                <li>Graph</li>
                <li>Get Our App</li>
            </nav>
            <footer>pvt lmtd</footer>
        </div>
    )
}

const title: React.CSSProperties = {
    position: 'absolute',
    left: '240px',
    top: '236px',

    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '5em',
    lineHeight: '110%',
    display: 'flex',
    alignItems: 'center',
    color: '#212353',
}
