request = require 'superagent'

URL = 'http://mimorelia.com/inmuebles/inmueble-individual.php'

for id in [1430..1500]
  do(id)->
    request
      .get(URL)
      .data({id: "#{id}"})
      .end (err, res)->
	throw err if err
        mail = (res.text.match(/(\w+@.*)</) or [null, null])[1] or= 'KO'
        console.log "ID[#{id}] => " + mail
