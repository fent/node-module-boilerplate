import assert from 'assert';
import boilerplate from '../src';

describe('Test', () => {
  it('Should do what I tell it to', () => {
    assert.strictEqual(typeof boilerplate, 'function');
    assert.strictEqual(boilerplate(), undefined);
  });
});
