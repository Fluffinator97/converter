import React from 'react'


class Country {
    name: string;
    id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
}

function formatCountry(country: any): Country {
    return { name: country.name, id: country.id };
  }
  class MovieService {
    getMovies(base: string): Promise<Country[]> {
      return fetch(`https://api.exchangeratesapi.io/latest`)
          .then(res => res.json())
          .then(res => res.map((country: any) => formatCountry(country))
    }
  }
  const apiClient = new MovieService();
  apiClient.getMovies('sci-fi').then(countries => console.log(countries));


export default function Favorit() {
    return (
        <div>
            <div style={countryList}></div>
            <div style={boxStyling} className="favoritBox">
                <div style={bindingBox}>
                    <header style={boxHeader}>Favorits</header>
                    <button style={buttonStyling} itemID='openCurrencyList' >Add Favorit</button>
                </div>
                <ul id='favoritList'>
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    )
}


const countryList: React.CSSProperties = {

    padding: 0,
    margin: 0,
    height: 300,
    width: 500,
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    overflow: 'scroll',
}

const boxStyling: React.CSSProperties = {
    padding: 0,
    margin: 0,
    height: 300,
    width: 500,
    marginLeft:'75%',
    backgroundColor: 'white'
}

const boxHeader: React.CSSProperties = {
    paddingTop: 10,
    margin: 0,
    height: 40,
    width: '80%',
    backgroundColor: 'pink',
    textAlign: 'center',
}

const buttonStyling: React.CSSProperties = {
    margin: 0,
    height: 40,
    width: '20%',
    backgroundColor: 'pink',
    textAlign: 'center',
}

const bindingBox: React.CSSProperties = {
    display: 'flex'
}