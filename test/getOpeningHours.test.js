const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Teste não passando argumentos', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Verifica se o zoo está fechado na segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Verifica se o zoo está aberto na terça', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Verifica se o zoo está fechado na quarta a noite', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('Verifica se o dia é valido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  test('Verifica se os minutos são numeros', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  test('Verifica se é AM ou PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  test('Verifica se hora representa um numero', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  test('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  test('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
