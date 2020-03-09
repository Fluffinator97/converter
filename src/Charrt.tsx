import React, { Component } from 'react'
import Chart from "chart.js";
import { thisExpression } from '@babel/types';

interface Props {
    toCurrency: string
}

interface State {
    today: any,
    lastMonth: any,


}

export default class LineGraph extends React.Component<Props,State>{
    
    EndDate: any;
    constructor(props: Props){
        
        super(props)
         let today = new Date()
         

        
        this.state = {
            today : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            
            lastMonth: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),
        }
    }
    
    chartRef = React.createRef() as any;
    

    


    componentDidMount() {
        
        fetch(`https://api.exchangeratesapi.io/history?start_at=${this.state.lastMonth}&end_at=${this.state.today}`)
        
        .then(res => 
        
                res.json()
            )
        .then(data => {
            let rates: any = Object.values(data.rates)
            console.log(rates)
            
            const values: number[] = []
            for (const rate of rates) {  
                values.push(rate[this.props.toCurrency])
            }
            
            console.log(values)
           
            
        }).catch(error => {
            console.log(error);
    
        });
        
        
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: [`${this.state.lastMonth}`, `${this.state.today}`],
                datasets: [
                    {
                        label: "Sales",
                        data: [67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.props.toCurrency !== prevProps.toCurrency) {
            
        }
    }

    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
