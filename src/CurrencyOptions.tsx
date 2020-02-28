import React from 'react'
import CurrencyRow from './CurrencyRow'
interface Props {
}
interface State {
    error: null
    isLoaded: boolean
    options: []
    fromCurrency: string
    toCurrency: string
}
export default class CurrencyOptions extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            options: [],
            fromCurrency: '',
            toCurrency: ''
        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest")
            .then(res => res.json())
            .then(
                data => {
                    console.log(data.base)
                    this.setState({
                        isLoaded: true,
                        fromCurrency: data.base,
                        toCurrency: Object.keys(data.rates)[0],
                        options: data.rates,
                    })


                },
                (error) => {

                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    selectHandler = (event: { target: { name: string; value: any } }) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
            console.log('read')
        }
        if (event.target.name  === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

    render() {
        if (this.state.error) {
            return <div>Error</div>
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <CurrencyRow
                        name={'from'}
                        currencyOptions={Object.keys(this.state.options)}
                        selectedCurrency={this.state.fromCurrency}
                        onChangeCurrency={(event) => this.selectHandler(event)}
                    />
                    <div>=</div>
                    <CurrencyRow
                        name={'to'}
                        currencyOptions={Object.keys(this.state.options)}
                        selectedCurrency={this.state.toCurrency}
                        onChangeCurrency={(event) => this.selectHandler(event)}
                    />
                </div >)
        }
    }
}