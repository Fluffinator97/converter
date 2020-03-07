import React from 'react'
import CurrencyOptions from './CurrencyOptions'
import Image from './Image'
interface Props {
    toggleTheme: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export default function Layout(props: Props) {
    return (
        <div style={wrapper}>
            <div>
                <h1>Currency Convertor</h1>

                <nav>
                    <li>Home</li>
                    <li>Graph</li>
                    <li>Get Our App</li>
                </nav>
                <button onClick={props.toggleTheme}>
                    Toggle theme </button>
            </div>
            <div style={container}>
                <div style={groupItem}><CurrencyOptions /></div>
                <div style={groupItem}><Image /></div>
            </div>

        </div>
    )
}

const wrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyItems: 'space-between',
    margin: '0',
    padding:'2rem',
    height: '100vh'
    
}

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyItems: 'space-between',
    alignItems: 'center',
    height: '100vh'
}

const groupItem: React.CSSProperties = {
    flex: '1 50%',
}
