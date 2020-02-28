import React from 'react'
import CurrencyExport from './CurrencyExport'
interface Props {

}
interface State {
    error: null
    isLoaded: boolean
    options: []
}

export default class CurrencyOptions extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            options: []
        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest")
            .then(res => res.json())
            .then(
                data => {
                    this.setState({
                        isLoaded: true,
                        options: data.rates
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

    render() {
        if (this.state.error) {
            return <div>Error</div>
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            // const options = (...Object.keys(this.state.options))
            return (
                <CurrencyExport currencyOptions={Object.keys(this.state.options)}></CurrencyExport>)
        }
    }
}