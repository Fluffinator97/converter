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

            <select value={props.selectedCurrency} onChange={props.onChangeCurrency} name={props.name} id="">
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

const color: React.CSSProperties = {
    color: 'white'
}

const image: React.CSSProperties = {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
}