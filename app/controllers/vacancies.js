import Ember from 'ember';

export default Ember.Controller.extend({
  getData: Ember.inject.service('service/index'),

  actions: {
    onSearch() {
      this.set('searchData', this.get('searchData'));
      this.get('getData').getVacancies(this.get('searchData')).then((data) => {
        this.set('model', data);
      });

      return false;
    },
  },
});
