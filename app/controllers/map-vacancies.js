import Ember from 'ember';

export default Ember.Controller.extend({
  getData: Ember.inject.service('service/index'),

  lat: 45.519743,
  lng: -122.680522,
  zoom: 10,
  bb: [
    [53.997679419714072, 27.770004272460938],
    [53.803489443287994, 27.289352416992188]
  ],
  latLeft: 53.997679419714072,
  lngLeft: 27.770004272460938,
  latRight: 53.803489443287994,
  lngRight: 27.289352416992188,

  actions: {
    updateLocation(r, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(r, {
        lat: location.lat,
        lng: location.lng
      });
    },
    updateCenter(e) {
      let bounds = e.target.getBounds();

      this.set('latLeft', bounds.getSouthWest().lat);
      this.set('lngLeft', bounds.getSouthWest().lng);
      this.set('latRight', bounds.getNorthEast().lat);
      this.set('lngRight', bounds.getNorthEast().lng);

      this.get('getData').getVacancies(this.get('searchData'),bounds.getSouthWest().lat, bounds.getSouthWest().lng,
        bounds.getNorthEast().lat, bounds.getNorthEast().lng).then((data) => {
          this.set('model', data);
        });
    },
    search() {
      this.set('searchData', this.get('searchData'));
      this.get('getData').getVacancies(this.get('searchData'),this.get('latLeft'), this.get('lngLeft'),
        this.get('latRight'), this.get('lngRight')).then((data) => {
          this.set('model', data);
        });
    },
    onKeyPress(){
      this.get('getData').getVacancies(this.get('searchData'),this.get('latLeft'), this.get('lngLeft'),
        this.get('latRight'), this.get('lngRight')).then((data) => {
        this.set('model', data);
        });
    }
  },
});
