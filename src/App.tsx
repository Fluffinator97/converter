import React from 'react';
import Layout from './Layout';
import { Switch,Route,Link } from 'react-router-dom'
import Graph from './Graph';
import About from './About';
import Image from './Image'
import ErrorBoundary from './ErrorBoundary';


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
            <ErrorBoundary>
              <Layout displayImage={<About/>} />
            </ErrorBoundary>
          </Route>
          <Route path="/">
            <ErrorBoundary>
              <Layout displayImage={<Image/>} />
            </ErrorBoundary>
          </Route>
          <Route path="/graph">
            <ErrorBoundary>
              <Layout displayImage={<Graph/>} />
            </ErrorBoundary>
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