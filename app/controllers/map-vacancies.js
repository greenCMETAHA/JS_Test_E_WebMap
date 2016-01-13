import ControllerForSearch from './vacancies';

var latLeftMinsk = 53.997679419714072; //original coordinates
var lngLeftMinsk = 27.770004272460938;
var latRightMinsk = 53.803489443287994;
var lngRightMinsk = 27.289352416992188;

export default ControllerForSearch.extend({
  lat: 45.519743,
  lng: -122.680522,
  zoom: 10,
  bb: [
    [latLeftMinsk, lngLeftMinsk],
    [latRightMinsk, lngRightMinsk]
  ],
  latLeft: latLeftMinsk,
  lngLeft: lngLeftMinsk,
  latRight: latRightMinsk,
  lngRight: lngRightMinsk,

  actions: {
    updateLocation(r, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(r, {
        lat: location.lat,
        lng: location.lng
      });
    },
    updateCenter(event) {
      let bounds = event.target.getBounds();

      this.set('latLeft', bounds.getSouthWest().lat);
      this.set('lngLeft', bounds.getSouthWest().lng);
      this.set('latRight', bounds.getNorthEast().lat);
      this.set('lngRight', bounds.getNorthEast().lng);

      this.get('getData').getVacancies(this.get('searchData'),bounds.getSouthWest().lat, bounds.getSouthWest().lng,
        bounds.getNorthEast().lat, bounds.getNorthEast().lng).then((data) => {
          this.set('model', data);
        });
    },
  },
});
