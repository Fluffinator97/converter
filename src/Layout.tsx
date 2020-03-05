import React from 'react'
import CurrencyOptions from './CurrencyOptions'
import Image from './Image'

export default function Layout() {
    return (
        <div>
            <div style={wrapper}>
                <div style={container}>
                    <h1>Currency Convertor</h1>
                    <p></p>
                    <CurrencyOptions />
                    <nav>
                        <li>Home</li>
                        <li>Graph</li>
                        <li>Get Our App</li>
                    </nav>
                </div>
                <div style={self} >
                    <Image />
                </div>
            </div>
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
}
const wrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:'5rem 2rem'

}
const container: React.CSSProperties = {
    maxWidth: '50%'

}
const self: React.CSSProperties = {
    maxWidth: '50%',
    alignSelf:'flex-end'

}