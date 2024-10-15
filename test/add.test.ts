import { describe } from 'vitest';
import { assert, expect, it } from 'vitest';
import { add } from '../src/add';

describe('Add numbers', () => {
  // Positvie Scenarios
  it('Adding Postive numbers', () => {
    expect(add(3, 4)).toBe(7);
  });

  it('Adding Negative numbers', () => {
    // Assertion
    expect(add(3, -4)).toBe(-1);
  });

  it('Adding Decimals numbers', () => {
    expect(add(3.5, -4)).toBe(-0.5);
  });

  // Negative Scenarios

  it.fails('Passing Strings', () => {
    expect(add('3', -4)).toBe(-0.5);
  });

  it('Passing Strings - With error message', () => {
    expect(() => add('3', -4)).toThrowError('Please provide valid number');
  });
});

// Negative numbers
// Decimals
// Strings -> Only provide numbers
