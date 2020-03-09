import React from 'react';
import Layout from './Layout';

interface Props {
}

export default class App extends React.Component<Props>{
  constructor(props: Props) {
    super(props);
  
  }

  

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    )
  }
}

