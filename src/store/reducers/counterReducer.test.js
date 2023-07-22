import counterReducer, { decrement, increment } from "./counterReducer"

describe('getCounterValueReducer', () => {
    test('increment', () => {
        expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 })
    });
    test('decrement', () => {
         expect(counterReducer({ value: 0 }, decrement())).toEqual({
           value: -1,
         });
    })
})