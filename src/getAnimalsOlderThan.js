const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;

  return species.find((bicho) => bicho.name === animal)
    .residents.every((bichoIdade) => bichoIdade.age >= age);
}

module.exports = getAnimalsOlderThan;
