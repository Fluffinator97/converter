import React from 'react'


interface Props {
    name:string
    currencyOptions: string[]
    selectedCurrency: string
    onChangeCurrency: ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    amount: number

}

export default function CurrencyRow(props: Props) {
    return (
        <div>
            <input type="number" name={props.name} value={props.amount} id="" />
            <select value={props.selectedCurrency} onChange={props.onChangeCurrency} name={props.name} id="">
                {props.currencyOptions.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}


            </select>
        </div>
    )
}
