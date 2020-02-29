import React from 'react'
import CurrencyRow from './CurrencyRow'
import SyncIcon from '@material-ui/icons/Sync'
interface Props {

}
interface State {
    error: null
    isLoaded: boolean
    amountInFromCurrency: boolean
    options: string[]
    fromCurrency: string
    toCurrency: string
    amount: number
    exchangeRate: number
}
export default class CurrencyOptions extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            amountInFromCurrency: true,
            options: [],
            fromCurrency: '',
            toCurrency: '',
            amount: 1,
            exchangeRate: 1,

        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest")
            .then(res => res.json())
            .then(
                data => {
                    console.log(data.base)
                    const defaultCurrency = Object.keys(data.rates)[0]

                    this.setState({
                        isLoaded: true,
                        fromCurrency: data.base,
                        toCurrency: defaultCurrency,
                        options: [...Object.keys(data.rates), data.base],
                        exchangeRate: (data.rates[defaultCurrency])
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

    update(fromCurrency: string | null, toCurrency: string | null) {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ exchangeRate: (data.rates[toCurrency]) })
                })
        }

    }

    changeCurrency = (event: { target: { name: string; value: string } }) => {

        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
            console.log(event.target.value, this.state.toCurrency)
            this.update(event.target.value, this.state.toCurrency)
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
            console.log(this.state.fromCurrency, event.target.value)
            this.update(this.state.fromCurrency, event.target.value)
        }

    }

    changeAmount = (event: { target: { name: string; value: number } }) => {
        if (event.target.name === "fromInput") {
            this.setState({
                amount: event.target.value,
                amountInFromCurrency: true
            })
        }
        if (event.target.name === "toInput") {
            this.setState({
                amount: event.target.value,
                amountInFromCurrency: false
            })
        }

    }


    render() {
        if (this.state.error) {
            return <div>Error</div>
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        }

        else {
            let fromAmount: number, toAmount: number
            if (this.state.amountInFromCurrency) {
                fromAmount = this.state.amount
                toAmount = this.state.amount * this.state.exchangeRate

            }
            else {
                toAmount = this.state.amount
                fromAmount = this.state.amount / this.state.exchangeRate

            }
            return (
                <div style={container}>
                    <CurrencyRow
                        name={'from'}
                        nameInput={'fromInput'}
                        currencyOptions={(this.state.options)}
                        selectedCurrency={this.state.fromCurrency}
                        onChangeCurrency={(event) => this.changeCurrency(event)}
                        onChangeAmount={(event) => this.changeAmount(event)}
                        amount={fromAmount}
                    />
                <SyncIcon/>
                    <CurrencyRow
                        name={'to'}
                        nameInput={'toInput'}
                        currencyOptions={(this.state.options)}
                        selectedCurrency={this.state.toCurrency}
                        onChangeCurrency={(event) => this.changeCurrency(event)}
                        onChangeAmount={(event) => this.changeAmount(event)}
                        amount={toAmount}
                    />
                </div >)
        }
    }
}

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    margin: '0.5em',
    justifyContent: 'center',
    alignItems: 'center',

}