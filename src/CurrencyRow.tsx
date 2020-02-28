import React from 'react'


interface Props {
    currencyOptions: string[]
}

export default function CurrencyRow(props: Props) {
    return (
        <div>
            <input type="number" name="" id="" />
            <select name="" id="">
                {props.currencyOptions.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}


            </select>
        </div>
    )
}
