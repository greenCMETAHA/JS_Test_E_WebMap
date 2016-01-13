import Ember from 'ember';

export default Ember.Controller.extend({
  lat: 45.519743,
  lng: -122.680522,
  zoom: 10,
  bb: [
    [53.997679419714072, 27.770004272460938], //Minsk
    [53.803489443287994, 27.289352416992188]
  ],
  restaurants: Ember.A([                      //example
    {
      name: 'Sinju Restaurant',
      rating: 4,
      lat: 53.99,
      lng: 27.77
    },
    {
      name: 'Burgerville',
      rating: 3.8,
      lat: 53.8034,
      lng: 27.289
    },
    {
      name: 'Le Pigeon',
      rating: 4.5,
      lat: 45.522752,
      lng: -122.657979
    },
  ]),

  actions: {
    updateCenter(e) {

    },
    updateLocation(r, e) {
      let location = e.target.getLatLng();
      Ember.setProperties(r, {
        lat: location.lat,
        lng: location.lng
      });
    }
  }
});
