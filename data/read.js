const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = process.env.ATLAS_CONNECTION;

export default read=()=>{
    const prom = new Promise((resolve,reject)=>{
      MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, function(err,client){
        if(err){
          reject(err)
        }
        else{
          // console.log('create')
          const collection = client.db("Proyect").collection("MyProyect");
        
          collection.find({}).toArray(function(err, docs) {
            if(err){
              reject(err)
            }
            else{
            console.log("Found the following records");
            console.log(docs)
            client.close()
            resolve(docs)
            }
          });
        }
     })
    })
    return prom
  }