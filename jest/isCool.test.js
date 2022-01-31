const myModule = require('./isCool')
const isCool = myModule.isCool;
const capitalize = myModule.capitalize;

beforeEach(() => {
    console.log('beforeEach')
})

afterEach(() => {
    console.log('after each')
})
describe('is cool', () => {
    test('is cool?', () => {
        expect(isCool('Jacob')).toBeTruthy()
    })

    test('is cool?', () => {
        expect(isCool(' Jacob')).toBeTruthy()
    })

    test('is cool? with trailing and leading white space with lowercase', () => {
        expect(isCool('  jacob  ')).toBeTruthy()
    })
})
test('is cool?', () => {
    expect(isCool('Jarrod')).toBeFalsy()
})

test('is cool?', () => {
    expect(isCool('kate ')).toBeTruthy()
})

