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

const c = (crianca) => crianca.filter((contagem) => contagem.age < 18).length;
const a = (adulto) => adulto.filter((contagem) => contagem.age >= 18 && contagem.age < 50)
  .length;
const s = (velho) => velho.filter((contagem) => contagem.age >= 50).length;

function countEntrants(entrants) {
  // seu código aqui
  const entradaPessoas = {
    child: c(entrants),
    adult: a(entrants),
    senior: s(entrants),
  };
  return entradaPessoas;
}

const { prices } = data;

// prices: {
//   adult: 49.99,
//   senior: 24.99,
//   child: 20.99,
// },

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  // if (Object.keys(entrants).length === 0) {
  //   return 0;
  // }
  // if (entrants) {
  return a(entrants) * prices.adult + c(entrants) * prices.child + s(entrants) * prices.senior;
  // }
  // if (entrants) {
  // return adult(entrants) * prices.adult || child(entrants) * prices.child || senior(entrants) * prices.senior;
  // }
}

// const cashAdult = (entrants) => adult * prices.adult;
// const cashChild = child * prices.child;
// const cashSenior = senior * prices.senior;

// const valores = {
//   child: prices.child,
//   adult: prices.adult,
//   senior: prices.senior,
// }
// return valores;
// console.log(valores);

module.exports = { calculateEntry, countEntrants };
