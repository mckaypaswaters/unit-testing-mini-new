import {add} from '../utils/functions'

it('add returns the sum of two numbers', () => {
    expect(add(1,2)).toBe(3)
})
// Take in '3' and '4' receive a number
it('add returns the sum of two number strings', () => {
    expect(add('3', '4')).toBe(7)
})
// Take in two strings check for NaN
it('If two strings are entered returns NaN', () => {
    expect(add('Hello', 'There')).toBeNaN()
})



