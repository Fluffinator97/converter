import React from 'react'

interface Props {
    currencyTranslations: { fromCurrency: string, toCurrency: string }[]
}

interface State {
    list: any[]
}
export default class Favorite extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            list: []
        }
    }

    addItem = (event: { preventDefault: () => void; }) => {
        let favList = this.state.list
        let favGroup: {
            fromCurrency: string
            toCurrency: string
            display: string
        }
        if (this.props.currencyTranslations !== null && favList.length <= 4) {
            event.preventDefault()
            if (favList.some(item => item.display ===(`${this.props.currencyTranslations[0].fromCurrency} vs ${this.props.currencyTranslations[0].toCurrency}`))) { }
            else {
                favGroup = {
                    fromCurrency: `${this.props.currencyTranslations[0].fromCurrency}`,
                    toCurrency: this.props.currencyTranslations[0].toCurrency,
                    display: `${this.props.currencyTranslations[0].fromCurrency} vs ${this.props.currencyTranslations[0].toCurrency}`
                }
                favList.push(favGroup)
            }
            this.setState({
                list: favList
            })
        }
    }
    showFav = (e: any) => {

    }
    render() {
        console.log(this.state.list)
        return (
            <div>
                <button onClick={this.addItem}>Add</button>
                <div style={boxStyling} className="favoritBox">
                    <div style={bindingBox}>
                        <header style={boxHeader}>Favorits</header>
                    </div>
                    {this.state.list.map(item => {
                        return <li
                            key={item.display}>{item.display}</li>
                    })}
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