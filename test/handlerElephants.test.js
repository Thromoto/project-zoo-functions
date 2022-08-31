// const { TestScheduler } = require('jest');
// const { species } = require('../data/zoo_data');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  test('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  test('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  // test('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
  //   expect(handlerElephants('popoularity')).toEqual(5);
  // });
  test('Passando por argumento um objeto vazio ({}) deve retornar a string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('xablau')).toBeNull();
  });
});
