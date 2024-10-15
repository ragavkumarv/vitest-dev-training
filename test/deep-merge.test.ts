import { assert, describe, expect, test, it } from 'vitest';
import { deepMerge } from '../src/deep-merge';

describe('Merge in two elements', () => {
  it('Merging two arrays', () => {
    const merged = deepMerge(
      ['apple 🍎', 'orange 🍊'],
      ['peach 🍑', 'cocunut 🥥']
    );

    expect(merged).toEqual(['apple 🍎', 'orange 🍊', 'peach 🍑', 'cocunut 🥥']);
  });

  it('Merging two objects', () => {
    const merged = deepMerge(
      { name: 'guru', github: 'unknown' },
      { github: 'Gnanaguru18', age: 20 }
    );

    expect(merged).toEqual({
      age: 20,
      github: 'Gnanaguru18',
      name: 'guru',
    });
  });

  it('Deep Merging two nested objects', () => {
    const merged = deepMerge(
      { name: 'guru', age: 20, accounts: { github: 'unknown' } },
      { accounts: { twitter: 'Gnanaguru18' } }
    );

    expect(merged).toEqual({
      age: 20,
      accounts: { github: 'unknown', twitter: 'Gnanaguru18' },
      name: 'guru',
    });
  });
});

// toBe -> primitive
// toEqual -> objects, arrays, nested
