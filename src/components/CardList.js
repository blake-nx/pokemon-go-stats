import React from 'react';
import Card from './Card';

const CardList = ({ pokemon }) => {
  return (
    <div className="container bg-light-gray">
      {
        pokemon.map((pokemon, i) => {
          return (
            <Card
              key={i}
              id={pokemon.id}
              name={pokemon.name}
              type1={pokemon.type1}
              type2={pokemon.type2}
              atk={pokemon.atk}
              def={pokemon.sta}
              sta={pokemon.def}
              cp={pokemon.maxcp}
              form={pokemon.form}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;