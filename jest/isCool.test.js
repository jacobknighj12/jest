const isCool = require('./isCool');

test('is cool?', () => {
    expect(isCool('Jacob')).toBeTruthy()
})

test('is cool?', () => {
    expect(isCool(' Jacob')).toBeTruthy()
})

test('is cool? with trailing and leading white space with lowercase', () => {
    expect(isCool('  jacob  ')).toBeTruthy()
})

test('is cool?', () => {
    expect(isCool('Jarrod')).toBeFalsy()
})

test('is cool?', () => {
    expect(isCool('kate ')).toBeTruthy()
})

