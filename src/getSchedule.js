const data = require('../data/zoo_data');

const diasZoo = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const { species } = data;
// const { hours } = data;

// const animalName = species.find((tipoAnimal) => tipoAnimal.name);
const datas = species.find((dias) => dias.availability);
const segunda = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  const animal = species.find((nome) => nome.name === scheduleTarget);
  if (animal) {
    return animal.availability;
  }
  if (scheduleTarget === 'Monday') {
    return segunda;
  }
  const objAnimal = {};
  if (Object.keys(diasZoo).find((diaAni) => diaAni === scheduleTarget)) {
    objAnimal[scheduleTarget] = diasZoo[scheduleTarget];
    return objAnimal;
  }
  // if (!scheduleTarget || scheduleTarget !== animalName || scheduleTarget !== datas) {
  return diasZoo;
  // }
}

// function dias(xxx) {
//   const animal = species.find((nome) => nome.name === xxx);
//   console.log(animal.availability);
// }
// dias('lions');

module.exports = getSchedule;
