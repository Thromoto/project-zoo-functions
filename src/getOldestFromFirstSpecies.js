const data = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// const employees = [
//   'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//   burlId,
//   olaId,
//   '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//   stephanieId,
//   '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   'c1f50212-35a6-4ecd-8223-f835538526c2',
//   'b0dc644a-5335-489b-8a2c-4e086c7819a2',
// ];

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = employees.find((ids) => id === ids.id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === funcionario).residents;
  const oldAnimal = animal.sort((an1, an2) => an2.age - an1.age)[0];
  return Object.values(oldAnimal);
}

module.exports = getOldestFromFirstSpecies;
