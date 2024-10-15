import { assert, expect, test } from 'vitest';
import { squared } from '../src/basic';

// Edit an assertion and save to see HMR in action

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('Squared', () => {
  expect(squared(2)).toBe(4);
  expect(squared(12)).toBe(144);
  expect(squared(-4)).toBe(16);
  expect(squared(-4)).toBe(16);
});

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, 'matches original');
});

// obj1 == obj2
// arr1 == arr2
