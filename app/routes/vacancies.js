import Ember from 'ember';

export default Ember.Route.extend({
  getData: Ember.inject.service('service/index'),
  model() {
    return this.get('getData').getVacancies();
  },
});
