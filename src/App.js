import React from 'react'
import './App.css';
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import mainlogo from './logo.png'
import { GifsContextProvider } from './components/context/GifsContext';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src={mainlogo} />
            </figure>
          </Link>
        <GifsContextProvider>
          <Route 
            component={Home}
            path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"
          />
          <Route
            component={Detail}
            path="/gif/:id"
          />
        </GifsContextProvider>
      </section>
    </div>
  );
}
