import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | character-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:character-details');
    assert.ok(route);
  });
});
