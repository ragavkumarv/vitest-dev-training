import { assert, describe, expect, test, it , vi} from 'vitest';
import { greeting } from '../src/greeting';


test('greeting', () => {
    // spy on function
    const spy = vi.spyOn(console, 'log')

    greeting("Shakthi")

    expect(spy).toBeCalledWith('Hello, Shakthi')
    expect(spy).toBeCalledTimes(1)
})