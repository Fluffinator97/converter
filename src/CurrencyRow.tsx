import React from 'react'

interface Props {

    name: string
    nameInput: string
    currencyOptions: string[]
    selectedCurrency: string
    onChangeCurrency: ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    onChangeAmount: ((event: React.ChangeEvent<any>) => void)
    amount: number

}

export default function CurrencyRow(props: Props) {
    return (
        <div style={container}>

            <select style={dropDown} value={props.selectedCurrency} onChange={props.onChangeCurrency} name={props.name} id="">
                {props.currencyOptions.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}


            </select>
            <input type="number" name={props.nameInput} value={props.amount} onChange={props.onChangeAmount} id="" />
        </div>
    )
}

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5em',
    justifyItems: 'center',
    maxWidth: '40vw',
    minWidth: '2rem'
}

const dropDown: React.CSSProperties = {
    display: 'block',
	fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1rem',
    textAlign: 'center',
    color: '#FFFFFF',

	padding: '.6em 1.4em .5em .8em',
	width: '100%',
	maxWidth: '100%',
	boxSizing: 'border-box',
    margin: '0',
    
	background: '#9C69E2',
	boxShadow: '10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBFF',
    borderRadius: '3rem',
    
	appearance: 'none',




















    
    
}
