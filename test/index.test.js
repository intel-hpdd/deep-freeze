// @flow

import {describe, it, expect, jasmine} from './jasmine';

import deepFreeze from '../source/index';

describe ('deep freeze', () => {
  it('should be a function', () => {
    expect(deepFreeze).toEqual(jasmine.any(Function));
  });

  it('should freeze an object', () => {
    expect(Object.isFrozen(deepFreeze({}))).toBe(true);
  });

  it('should freeze an array', () => {
    expect(Object.isFrozen(deepFreeze([]))).toBe(true);
  });

  it('should freeze nested objects', () => {
    const obj = deepFreeze([{}]);

    expect(Object.isFrozen(obj[0])).toBe(true);
  });

  it('should freeze nested arrays', () => {
    const obj = deepFreeze([[]]);

    expect(Object.isFrozen(obj[0])).toBe(true);
  });

  it('should work with nested unfreezables', () => {
    const obj = deepFreeze([
      1,
      2,
      {}
    ]);

    expect(Object.isFrozen(obj[2])).toBe(true);
  });

});
