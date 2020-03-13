import React from 'react';
import Layout from './Layout';
import { Switch,Route,Link } from 'react-router-dom'
import Graph from './Graph';
import About from './About';
import Image from './Image'

export default function App() {
  return (
    <div className="App">
        <nav style={wrapper}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/graph">Graph</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          
          <Route path="/about">
          <Layout displayImage={<About/>} />
          </Route>
          <Route path="/">
            <Layout displayImage={<Image/>} />
          </Route>
          <Route path="/graph">
            <Layout displayImage={<Graph/>} />
          </Route>
        </Switch>
      </div>
  )

}

const wrapper: React.CSSProperties = {
  position: 'fixed',
  top: '1rem',
  left:'1rem'

}