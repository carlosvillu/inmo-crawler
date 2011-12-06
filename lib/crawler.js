(function() {
  var URL, id, request, _fn;

  request = require('superagent');

  URL = 'http://mimorelia.com/inmuebles/inmueble-individual.php';

  _fn = function(id) {
    return request.get(URL).data({
      id: '' + id
    }).end(function(err, res) {
      var mail, _base;
      mail = (_base = res.text.match(/(\w+@.*)</) || [null, null])[1] || (_base[1] = 'KO');
      return console.log(("ID[" + id + "] => ") + mail);
    });
  };
  for (id = 1460; id <= 1500; id++) {
    _fn(id);
  }

}).call(this);
