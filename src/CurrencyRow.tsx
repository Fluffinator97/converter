import React from 'react'

interface Props {
    currencyOptionName: string[]
    selectedCurrency: string
    onChangeCurrency: ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    amount: number
}

export default function CurrencyRow(props: Props) {
    return (
        <div>
            <input type="number" value={props.amount} name="" id="" />
            <select value={props.selectedCurrency} onChange={props.onChangeCurrency} name="" id="">
                {props.currencyOptionName.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}

            </select>
        </div>
    )
}
