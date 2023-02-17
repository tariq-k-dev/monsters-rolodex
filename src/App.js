import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState(() => { monsters: data });
    //   })
    //   .catch((error) => {
    //     console.log('There was error in the API call 😂');
    //   });

    // ES7 async/await
    (async () => {
      try {
        const usersResponse = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersResponse.json();
        this.setState(() => {
          return { monsters: users };
        });
      } catch (error) {
        console.log('There was error in the API call 😂');
      }
    })();
  }

  handleChange = e => {
    const searchField = e.target.value;

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="app">
        <h1 id="app-h1">Monsters Rolodex</h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
