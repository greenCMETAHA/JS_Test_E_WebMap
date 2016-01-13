import Ember from 'ember';

export default Ember.Route.extend({
  URLs: Ember.inject.service('service/index'),
  model() {
    return this.get('URLs').getURLroute(); //default
  },
});

