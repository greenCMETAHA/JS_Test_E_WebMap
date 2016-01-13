import Ember from 'ember';

export default Ember.Controller.extend({
  URLs: Ember.inject.service('service/index'),

  actions: {
    search() {
      this.set('searchData', this.get('searchData'));
      this.get('URLs').getURLcontroller(this, this.get('searchData'));

      return false;
    },
    onKeyPress(){
      this.get('URLs').getURLcontroller(this, this.get('searchData'));
    }
  },
});
