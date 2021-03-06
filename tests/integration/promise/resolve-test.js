import { resolve } from 'ember-awesome-macros/promise';
import { raw } from 'ember-awesome-macros';
import { module, test } from 'qunit';
import compute from 'ember-macro-test-helpers/compute';

const value = 'value test';

module('Integration | Macro | promise | resolve');

test('wraps a value in resolved promise', function(assert) {
  return compute({
    assert,
    computed: resolve('key'),
    properties: {
      key: value
    },
    strictEqual: value
  }).promise;
});

test('composing: wraps a value in resolved promise', function(assert) {
  return compute({
    assert,
    computed: resolve(raw(value)),
    strictEqual: value
  }).promise;
});
