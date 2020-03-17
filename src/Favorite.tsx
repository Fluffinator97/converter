import React from 'react'

interface Props {
    currencyTranslations: { fromCurrency: string, toCurrency: string }[]
    showFav: ((event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void)
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
        let oldFav = localStorage.getItem('favList')
        if (oldFav) {
            favList = (JSON.parse(oldFav))
        }
        if (this.props.currencyTranslations !== null && favList.length <= 4) {
            event.preventDefault()

            if (favList.some(item => item.display === (`${this.props.currencyTranslations[0].fromCurrency} vs ${this.props.currencyTranslations[0].toCurrency}`))) { }
            else {
                favGroup = {
                    fromCurrency: `${this.props.currencyTranslations[0].fromCurrency}`,
                    toCurrency: this.props.currencyTranslations[0].toCurrency,
                    display: `${this.props.currencyTranslations[0].fromCurrency} vs ${this.props.currencyTranslations[0].toCurrency}`
                }
                favList.push(favGroup)
                localStorage.setItem('favList', JSON.stringify(favList))
            }
        }
        this.setState({
            list: favList
        })
    }

    componentDidMount() {
        const list = localStorage.getItem('favList') as string
        const parsedList = JSON.parse(list)
        if (list == null) {
            return false
        }
        else {
            this.setState({
                list: parsedList,
            })
            console.log(this.state.list)
        }
    }

    deleteItem = (event: any) => {
        let index = event.target.getAttribute('data-key')
        let favList = JSON.parse(localStorage.getItem('favList') as string);
        favList.splice(index, 1)
        this.setState({ list: favList });
        localStorage.setItem('favList', JSON.stringify(favList))
    }

    render() {
        console.log(this.state.list)
        return (
            <div>
                <button onClick={this.addItem}>Add</button>
                <div style={boxStyling} className="favoriteBox">
                    <div style={bindingBox}>
                        <header style={boxHeader}>Favorites</header>
                    </div>
                    {this.state.list.map((item, index) => {
                        return <li key={item.display}><p onClick={this.props.showFav}
                            data-fromcurrency={item.fromCurrency}
                            data-tocurrency={item.toCurrency}
                            >{item.display}
                        </p>
                            <button className="button" type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button>
                        </li>
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