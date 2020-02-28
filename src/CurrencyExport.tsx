import React from 'react'
import CurrencyRow from './CurrencyRow';


interface Props {
    currencyOptions: string[]
}
interface State {
    fromCurrency: string
    toCurrency: string
}

export default class CurrencyExport extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            fromCurrency: 'something',
            toCurrency: 'somethingElse'
        }
    }

    

    render() {
        return (
            <div>
                <CurrencyRow
                    currencyOptions={this.props.currencyOptions}
                />
                <div>=</div>
                <CurrencyRow
                    currencyOptions={this.props.currencyOptions}
                />
            </div >)

    }




}
