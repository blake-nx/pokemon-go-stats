import React from "react";

const typeColors = {
  bug: "#9CB81F",
  dark: "#444444",
  dragon: "#7037F8",
  electric: "#F8D030",
  fairy: "#F09AD9",
  fighting: "#C02F27",
  fire: "#F08030",
  flying: "#9096F0",
  ghost: "#705897",
  grass: "#3DC02A",
  ground: "#E0B669",
  ice: "#98D8D8",
  normal: "#ffffff",
  poison: "#A040A0",
  psychic: "#F55887",
  rock: "#E0B669",
  steel: "#6D8F9C",
  water: "#6890F0"
};

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

const Card = ({ name, type1, type2, id, atk, sta, def, cp, form }) => {
  function getCardBgColor(type1, type2) {
    let cardBg;
    if (type1 && type2) {
      cardBg = `linear-gradient(to bottom, ${typeColors[
        type1
      ]} 0%, ${typeColors[type2]} 80%)`;
    } else {
      cardBg = typeColors[type1];
    }
    return cardBg;
  }
  function getPokemonID(id) {
    let pokemonID;
    switch (String(id).length) {
      case 1:
        pokemonID = `00${id}`;
        break;
      case 2:
        pokemonID = `0${id}`;
        break;
      default:
        pokemonID = id;
    }
    return pokemonID;
  }
  function getForm(form) {
    let formID;
    switch (form) {
      case "Alola":
        formID = "_f2";
        break;
      case "Armored":
        formID = "_f4";
        break;
      case "Attack":
        formID = "_f2";
        break;
      case "Defense":
        formID = "_f3";
        break;
      case "Speed":
        formID = "_f4";
        break;
      default:
        formID = null;
    }
    return formID;
  }
  function getSprite(name) {
    let sprite;
    switch (name) {
      case "mr. mime":
        sprite = "mr-mime";
        break;
      case "farfetch'd":
        sprite = "farfetchd";
        break;
      case "nidoran♀":
        sprite = "nidoranf";
        break;
      case "nidoran♂":
        sprite = "nidoranm";
        break;
      default:
        sprite = name.toLowerCase();
    }
    return sprite;
  }
  return (
    <div
      className="tc card grow br3 pa3 ma2 dib bw2 shadow-5"
      style={{ background: getCardBgColor(type1, type2) }}
    >
      <div>
        <h3 className="bg-black-20 mt0 pa1 br3 white">
          {name} {form ? `(${form})` : ""}
        </h3>
        <img
        className="pokemonImg"
          alt={name}
          src={
            form
              ? `https://db.pokemongohub.net/images/official/detail/${getPokemonID(id)}${getForm(
                  form
                )}.webp`
              : `http://www.pokestadium.com/sprites/xy/${getSprite(
                  name.toLowerCase()
                )}.gif`
          }
        />
        <p>
          {type2
            ? `${titleCase(type1)} / ${titleCase(type2)}`
            : titleCase(type1)}
        </p>

        <div className="stats">
          ATK: {atk}
        </div>
        <div className="stats">
          STA: {sta}
        </div>
        <div className="stats">
          DEF: {def}
        </div>

        <p>
          Max CP: {cp}
        </p>
      </div>
    </div>
  );
};

export default Card;