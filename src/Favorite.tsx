import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

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
        if (this.props.currencyTranslations !== null && favList.length <= 3) {
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
            <div style={wrapper}>
                <button style={buttonStyle} onClick={this.addItem}>Add Favorite</button>

                <div style={container} >

                    {this.state.list.map((item, index) => {
                        return <li key={item.display} style={item}><p onClick={this.props.showFav}
                            data-fromcurrency={item.fromCurrency}
                            data-tocurrency={item.toCurrency}

                        >{item.display}
                        </p>
                            <button style={buttonStyle} type="button" value="delete" data-key={index} onClick={this.deleteItem}>Delete</button>
                        </li>
                    })}
                </div>

            </div >
        )
    }
}

const container: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
    padding: '1rem',
    margin:'2rem'
}
const wrapper: React.CSSProperties = {
    borderRadius: '6px',
    border: '1px solid #b2b8ad',
    color: '#757d6f',
    padding: '6px 24px',
    textShadow: '0px 1px 0px #ced9bf',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

}


const buttonStyle: React.CSSProperties = {
    boxShadow: '3px 4px 0px 0px #276873',
    background: 'linear-gradient(to bottom, #599bb3 5%, #408c99 100%)',
    backgroundColor: '#599bb3',
    borderRadius: '1rem',
    border: '1px solid #29668f',
    display: 'inline-block',
    cursor: 'pointer',
    color: '#ffffff',
    padding: '0.8rem',
    textDecoration: 'none',
    textShadow: '0px 1px 0px #3d768a',
    margin:'2rem'
}
