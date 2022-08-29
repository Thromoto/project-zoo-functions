const data = require('../data/zoo_data');

// function getSpeciesByIds(ids) {
//   // seu código aqui
// }

const { species } = data;

const getSpeciesByIds = (...ids) => species
  .filter((especie) => ids.some((id) => id === especie.id));

module.exports = getSpeciesByIds;
