db.passengers.insert( { _id: "P1",
"name": "Jhon Stuart",
"loc": { type: "Point", "coordinates": [125.6, 10.1] } }
  { "type": "Feature", "geometry": { "type": "Point", "coordinates": [125.6, 10.1] },
"properties": { "name": "Jhon Stuart" } } )
db.passengers.find()

Read more: http://mrbool.com/saving-geolocation-data-with-google-maps-api-and-mongodb/32551#ixzz4fZsTYeMV
