import React from 'react';
import Layout from './Layout';
import { Switch,Route,Link } from 'react-router-dom'
import Graph from './Graph';
import Favorit from './FavoritListBox';
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
              <Link to="/favorit">Favorit</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/graph">
            <Layout displayImage={<Graph/>} />
          </Route>
          <Route path="/favorit">
          <Layout displayImage={<Favorit/>} />
          </Route>
          <Route path="/">
            <Layout displayImage={<Image/>} />
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