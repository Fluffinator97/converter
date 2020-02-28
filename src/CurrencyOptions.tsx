import React from 'react'
import CurrencyRow from './CurrencyRow'
import { Component } from 'react'

interface Props {

}

interface State {
    error: null
    isLoaded: boolean
    data: string[]
}

export default class CurrencyOptions extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest")
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        data: res
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        if (this.state.error) {
            return <div>Error</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(this.state.data)
            return (
                <div>
                    data loaded
                </div>
            );
        }
    }
}


