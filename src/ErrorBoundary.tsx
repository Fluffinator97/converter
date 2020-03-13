import React, {Component} from 'react'

interface Props {

}
interface State {
    hasError: boolean
}
export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(){
        this.setState({ hasError: true})
    }
    render() {
        if(this.state.hasError){
            return(
                <div>
                    <h2>Something went wrong please reload the page. And dont do this again for your sake.</h2>
                </div>
            )
        }
        return this.props.children
    }

}
