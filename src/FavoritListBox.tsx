import React from 'react'
import CurrencyOptions from './CurrencyOptions'
import { listenerCount } from 'cluster';


interface Props {
    fromCurrency: string,
    toCurrency: string,
}

interface State {
    list: string[]
}
export default class Favorit extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            list: []
        }
    }

    addItem = (event: { preventDefault: () => void; }) => {
        if (this.props.fromCurrency !== null && this.props.toCurrency !== null) {
            event.preventDefault();
            let favList = []
            favList.push(this.props.fromCurrency, this.props.toCurrency)
            this.setState({
                list: favList
            })
        }
    }



    render() {
        console.log(this.state.list)
        return (
            <div>
                <button onClick={this.addItem}>Add</button>
                <div style={boxStyling} className="favoritBox">
                    <div style={bindingBox}>
                        <header style={boxHeader}>Favorits</header>
                        {/*  <button style={buttonStyling} itemID='openCurrencyList' >Add Favorit</button> */}
                    </div>
                    <ul id='favoritList'>
                        {this.state.list}
                    </ul>
                </div>
            </div>
        )
    }
}


const countryList: React.CSSProperties = {

    padding: 0,
    margin: 0,
    height: 300,
    width: 500,
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    overflow: 'scroll',
}

const boxStyling: React.CSSProperties = {
    padding: 0,
    margin: 0,
    height: 300,
    width: 500,
    marginLeft: '75%',
    backgroundColor: 'white'
}

const boxHeader: React.CSSProperties = {
    paddingTop: 10,
    margin: 0,
    height: 40,
    width: '100%',
    backgroundColor: 'pink',
    textAlign: 'center',
}

const bindingBox: React.CSSProperties = {
    display: 'flex'
}