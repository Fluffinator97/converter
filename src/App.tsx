import React from 'react'
import Layout from './Layout'
import { Switch, Route, Link } from 'react-router-dom'

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
        <Route path="/">
          <Layout displayPage={'home'} />
        </Route>
        <Route exact path="/graph">
          <Layout displayPage={'graph'} />
        </Route>
        <Route path="/about">
          <Layout displayPage={'about'} />
        </Route>
      </Switch>
    </div>

  )
}

const wrapper: React.CSSProperties = {
  position: 'fixed',
  top: '1rem',
  left: '1rem'
}