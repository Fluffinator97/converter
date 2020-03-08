import React, {Component} from "react"
import {Line} from 'react-chartjs-2'

interface Props {

}

interface State {

}
export default class Chart extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            chartData:{
                labels: ['Euro', 'Dollar'],
                datasets:[
                    {
                        label: 
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div className="chart">
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                    maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}
