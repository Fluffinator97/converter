import React from 'react'
import CurrencyRow from './CurrencyRow'
interface Props {
}
interface State {
    error: null
    isLoaded: boolean
    options:any
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
            options: [],
            fromCurrency: '',
            toCurrency: '',
            amount: 1,
            exchangeRate:1,
            
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
                        options:[...Object.keys(data.rates),data.base],
                        exchangeRate:(data.rates[defaultCurrency])
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
            let fromAmount:number, toAmount:number
            if (this.state.fromCurrency) {
              fromAmount = this.state.amount
              toAmount = this.state.amount * this.state.exchangeRate
              console.log(toAmount,this.state.fromCurrency)
            }
            else {
              toAmount = this.state.amount
              fromAmount = this.state.amount / this.state.exchangeRate
              console.log('test')
            }
            return (
                <div>
                    <CurrencyRow
                        name={'from'}
                        currencyOptions={(this.state.options)}
                        selectedCurrency={this.state.fromCurrency}
                        onChangeCurrency={(event) => this.selectHandler(event)}
                        amount={fromAmount}
                    />
                    <div>=</div> 
                    <CurrencyRow
                        name={'to'}
                        currencyOptions={(this.state.options)}
                        selectedCurrency={this.state.toCurrency}
                        onChangeCurrency={(event) => this.selectHandler(event)}
                        amount={toAmount}
                    />
                </div >)
        }
    }
}