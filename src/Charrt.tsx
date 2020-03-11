import React, { Component } from 'react'
import Chart from "chart.js";
import { thisExpression } from '@babel/types';

interface Props {
    toCurrency: string,

}

interface State {
    today: string,
    lastMonth: string, 
    values: number[],
    tags: string[]

    
    


}

export default class LineGraph extends React.Component<Props,State>{
    
    EndDate: any;
    constructor(props: Props){
        
        super(props)
         let today = new Date()
         
        
        
        this.state = {
            today : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            
            lastMonth: today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate(),

            values: [],
            tags:[]
     
            
        }
    }
    
    chartRef = React.createRef() as any;
    
    





    componentDidMount() {
        console.log('MOUNT')
        this.fetchData()
    }

    fetchData() {
        fetch(`https://api.exchangeratesapi.io/history?start_at=${this.state.lastMonth}&end_at=${this.state.today}`)
        
        .then(res => 
        
                res.json()
            )
        .then(data => {
            let rates: any = Object.values(data.rates)
            
            const values: number[] = []
            for (const rate of rates) {  
                values.push(rate[this.props.toCurrency])
            }
            this.setState({values: values, tags: this.getLabel(values)})
           
            
        }).catch(error => {
            console.log(error);
    
        });
    }

    getLabel(values: number[]){
        const test: string[] = []
            for(const item of values){
            test.push('.')
        }
        test.splice(0,2)
        test.unshift(this.state.lastMonth)
        test.push(this.state.today)
        return test
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        console.log('UPDATE')
        if (this.props.toCurrency !== prevProps.toCurrency) {
            this.fetchData()
        }
        if (JSON.stringify(this.state.values) !== JSON.stringify(prevState.values)) {
            const myChartRef = this.chartRef.current.getContext("2d");
            new Chart(myChartRef, {
                type: "line",
                
                data: {
                    //Bring in data
                    // labels: ['test','test','.','.','.','end'],
                    labels: this.state.tags,
                    datasets: [
                        {
                            label: "Exchange Rates",
                            data: this.state.values,
                            // data: [5,10,4,6,7,8],
                        }
                    ]
                },
                options: {
                    //Customize chart options
                }
            });
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
