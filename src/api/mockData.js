const newUsers = {
    
        "id": null,
        "name": "",
        "username": "",
        "email": "",
        "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
        "lat": "",
        "lng": ""
        }
        },
        "phone": "",
        "website": "",
        "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
        }
  };
  
  // Using CommonJS style export so we can consume via Node (without using Babel-node)
  module.exports = {
    newUsers
  };