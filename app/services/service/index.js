import Ember from 'ember';

export default Ember.Service.extend({
  getURL: function(searchData, swLat, swLng, neLat, neLng ) {
    if (searchData === undefined || searchData === null) {
      searchData='java';
    }
    if (swLat===undefined){
      swLat = 53.803489443287994;
    }
    if (swLng===undefined){
      swLng = 27.289352416992188;
    }
    if (neLat===undefined){
      neLat = 53.997679419714072;
    }
    if (neLng===undefined){
      neLng = 27.770004272460938;
    }
    var url= 'https://api.hh.ru/vacancies?' +
      'text=' + searchData  +
      '&clusters=true' +
      '&isMap=true&' +
      'items_on_page=100&' +
      'enable_snippets=true&' +
      'label=with_address' +
      '&bottom_lat=' + swLat +
      '&left_lng=' + swLng +
      '&top_lat=' + neLat  +
      '&right_lng=' + neLng +
      '&per_page=300';

    return url;
  },
  getVacancies: function(searchData, swLat, swLng, neLat, neLng ) {
    return Ember.$.getJSON(this.getURL(searchData, swLat, swLng, neLat, neLng));
  },
});
