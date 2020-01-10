import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movie-details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:movie-details');
    assert.ok(route);
  });
});
