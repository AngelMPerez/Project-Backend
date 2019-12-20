const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = process.env.ATLAS_CONNECTION;


export default create =(insert)=>{
    const prom =new Promise((resolve,reject)=>{
      MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, function(err,client){
        if(err){
          reject(err)
        }
        else{
          console.log('create')
          const collection = client.db("Proyect").collection("MyProyect");
  
          collection.insertOne(insert,function(err,result){
              if(err){
                reject(err)
              }
              else{
                client.close()
                resolve('inserted')
              }
            })
        }
      })
    })
    return prom
  }