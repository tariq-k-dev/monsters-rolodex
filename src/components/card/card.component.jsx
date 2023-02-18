import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
