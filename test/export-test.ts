import assert from 'node:assert';
import boilerplate from '..';

describe('Exports', () => {
  it('Exposes default function', () => {
    assert.strictEqual(typeof boilerplate, 'function');
  });
});
