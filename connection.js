const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node:"http://localhost:9200"
// cloud: 
// {      
//     id: '<deployment-id>'},//http://localhost:9200
// auth: {
//     username: 'elastic',
//     password: 'changeme'
//   }
})



module.exports = client;