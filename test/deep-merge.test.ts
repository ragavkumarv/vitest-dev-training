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
  
  // Snapshot testing - Regression Bug 🐞


  it('Deep Merging two nested objects - Snapshot', () => {
    const merged = deepMerge(
      { name: 'guru', age: 40, accounts: { github: 'unknown' } },
      { accounts: { twitter: 'Gnanaguru18' } }
    );

    expect(merged).toMatchSnapshot(); // old way
  });

  
  it('Deep Merging two nested objects - Inline Snapshot', () => {
    const merged = deepMerge(
      { name: 'guru', age: 30, accounts: { github: 'unknown' } },
      { accounts: { twitter: 'Gnanaguru18' } }
    );

    expect(merged).toMatchInlineSnapshot(`
      {
        "accounts": {
          "github": "unknown",
          "twitter": "Gnanaguru18",
        },
        "age": 30,
        "name": "guru",
      }
    `); // new way
  });



  it('Merging two different Types [Error]', () => {


    expect(() => deepMerge(
      { name: 'guru', age: 20, accounts: { github: 'unknown' } },
      ['rabbit 🐇', "Sparrow 🐦"]
    )).toThrowError("Can not merge two differnet types");
  });


});

// toBe -> primitive
// toEqual -> objects, arrays, nested

// Topic - Spying
// Nested function
// fn 0 - Test  -  unit test 0
      // fn 1 - unit test 1
      // fn 2 - unit test 2