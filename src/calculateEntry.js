// const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

const child = (crianca) => crianca.filter((contagem) => contagem.age < 18).length;
const adult = (adulto) => adulto.filter((contagem) => contagem.age >= 18 && contagem.age < 50)
  .length;
const senior = (velho) => velho.filter((contagem) => contagem.age >= 50).length;

function countEntrants(entrants) {
  // seu código aqui
  const entradaPessoas = {
    child: child(entrants),
    adult: adult(entrants),
    senior: senior(entrants),
  };
  return entradaPessoas;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
