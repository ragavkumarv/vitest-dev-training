import { assert, describe, expect, test, it , vi} from 'vitest';
import { greeting } from '../src/greeting';


test('greeting', () => {
    // spy on function
    const spy = vi.spyOn(console, 'log')

    greeting("Shakthi")

    expect(spy).toBeCalledWith('Hello, Shakthi') // includes
    expect(spy).toBeCalledTimes(2)

    expect(spy).toMatchInlineSnapshot(`
      [MockFunction log] {
        "calls": [
          [
            "Hello, Shakthi",
          ],
          [
            "🎉 Shakthi",
          ],
        ],
        "results": [
          {
            "type": "return",
            "value": undefined,
          },
          {
            "type": "return",
            "value": undefined,
          },
        ],
      }
    `)
})