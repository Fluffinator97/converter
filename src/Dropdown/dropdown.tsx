import React from 'react'
import './dropdownStyle.css'

interface Props{
}
interface State{
    displayMenu:boolean
}

export default class Dropdown extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            displayMenu: false,
        }
        this.showDropdownMenu = this.showDropdownMenu.bind(this)
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
    }
    showDropdownMenu(event: { preventDefault: () => void; }) {
        event.preventDefault()
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu)
        })
    }
    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu)
        })
    }
    render() {
        return (
            <div className="dropdown" style={{ background: "red", width: "200px" }} >
                <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
                {this.state.displayMenu ? (
                    <ul>
                        <li><a href="#Manage Pages">Home</a></li>
                        <li><a href="#Create Ads">Graph</a></li>
                        <li><a href="#Manage Ads">About</a></li>
                    </ul>
                ) :
                    (
                        null
                    )
                }
            </div>
        )
    }
}
