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
            <input type="number" style={inputStyle} name={props.nameInput} value={props.amount} onChange={props.onChangeAmount} id="" />
        </div>
    )
}

const container: React.CSSProperties = {
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    margin: '0.5em',
    justifyItems: 'center',
    // maxWidth: '40vw',
    minWidth: '5em',
}

const dropDown: React.CSSProperties = {
    display: 'block',
	fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1em',
    lineHeight: '1em',
    textAlignLast: 'center',
    color: '#FFFFFF',
	padding: '.5em',
	width: '50%',
	maxWidth: '50%',
	boxSizing: 'border-box',
    margin: '1em',
	background: '#9C69E2',
    borderRadius: '3em',

}

const inputStyle: React.CSSProperties = {
    display: 'block',
	fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '1rem',
    textAlign: 'center',
    color: 'white',

	padding: '.6em 1.4em .5em .8em',
	width: '50%',
	maxWidth: '50%',
	boxSizing: 'border-box',
    
	background: 'black',
	
    borderRadius: '3rem',
    
	appearance: 'none',
   
}
