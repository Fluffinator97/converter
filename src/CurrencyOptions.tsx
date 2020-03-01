import React from 'react'
import CurrencyRow from './CurrencyRow'
import Flag from './Flag'
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
    fromFlag: string
    toFlag: string
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
            fromFlag: '',
            toFlag: ''
        }
    }

    componentDidMount() {

        Promise.all([
            fetch("https://api.exchangeratesapi.io/latest"),
            fetch('https://restcountries.eu/rest/v2/all?fields=name;currencies;flag')
        ])
            .then((responses) => {
                // Get a JSON object from each of the responses
                return responses.map((response) => {
                    return response.json();
                });
            }).then(data => {
                data[0].then(dataSet1 => {
                    const defaultCurrency = Object.keys(dataSet1.rates)[0]

                    this.setState({
                        isLoaded: true,
                        fromCurrency: dataSet1.base,
                        toCurrency: defaultCurrency,
                        options: [...Object.keys(dataSet1.rates), dataSet1.base],
                        exchangeRate: (dataSet1.rates[defaultCurrency])
                    })
                    console.log(this.state.toCurrency)
                })
                data[1].then(dataSet2 => {
                    const toCountry = dataSet2.find((element: { currencies: { code: string }[] }) => element.currencies[0].code === this.state.toCurrency)
                    const fromCountry = dataSet2.find((element: { currencies: { code: string }[] }) => element.currencies[0].code === this.state.fromCurrency)
                    this.setState({
                        fromFlag: fromCountry.flag,
                        toFlag: toCountry.flag
                    })

                    console.log(toCountry, fromCountry)


                })
                // Log the data to the console
                // You would do something with both sets of data here
            }).catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
                console.log(error);
            });
    }


    // componentDidMount() {
    //     fetch("https://api.exchangeratesapi.io/latest")
    //         .then(res => res.json())
    //         .then(
    //             data => {
    //                 console.log(data.base)
    //                 const defaultCurrency = Object.keys(data.rates)[0]

    //                 this.setState({
    //                     isLoaded: true,
    //                     fromCurrency: data.base,
    //                     toCurrency: defaultCurrency,
    //                     options: [...Object.keys(data.rates), data.base],
    //                     exchangeRate: (data.rates[defaultCurrency])
    //                 })


    //             }
    //             ,
    //             (error) => {

    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 })
    //             }
    //         )
    // }









    update(fromCurrency: string | null, toCurrency: string | null) {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(dataSet1 => {
                    this.setState({ exchangeRate: (dataSet1.rates[toCurrency]) })
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
                    <Flag
                        flagImage={this.state.fromFlag} />
                    <CurrencyRow
                        name={'from'}
                        nameInput={'fromInput'}
                        currencyOptions={(this.state.options)}
                        selectedCurrency={this.state.fromCurrency}
                        onChangeCurrency={(event) => this.changeCurrency(event)}
                        onChangeAmount={(event) => this.changeAmount(event)}
                        amount={fromAmount}
                    />
                    <SyncIcon />
                    <CurrencyRow
                        name={'to'}
                        nameInput={'toInput'}
                        currencyOptions={(this.state.options)}
                        selectedCurrency={this.state.toCurrency}
                        onChangeCurrency={(event) => this.changeCurrency(event)}
                        onChangeAmount={(event) => this.changeAmount(event)}
                        amount={toAmount}
                    />
                    <Flag
                        flagImage={this.state.toFlag} />
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