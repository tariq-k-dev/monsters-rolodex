import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.styles.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);
  const [searchField, setSearchField] = useState('');
  const onSearchChange = e => {
    setSearchField(e.target.value);
  };

  // Get initial list of monsters, and only update if monsters changes
  useEffect(() => {
    (async () => {
      try {
        const usersResponse = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersResponse.json();
        setMonsters(users);
      } catch (error) {
        console.log('There was error in the API call 😂');
      }
    })();
  }, [monsters]);

  // Update filtered monsters list based on search input changes
  setFilteredMonsters(
    monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  );

  return (
    <div className="app">
      <h1 id="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder={'Search monsters'}
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
