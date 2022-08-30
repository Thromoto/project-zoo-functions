const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animais = {};
    species.forEach((elemento) => { animais[elemento.name] = elemento.residents.length; });
    return animais;
  }
  if (animal.sex === undefined) {
    return species.find((specie) => specie.name.includes(animal.specie)).residents.length;
  }
  return species.find((element) => element.name.includes(animal.specie)).residents
    .filter((element1) => element1.sex === animal.sex).length;
}

module.exports = countAnimals;
