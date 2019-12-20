const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = process.env.ATLAS_CONNECTION;

export default connection=()=>{
  const prom = new Promise((resolve,reject)=>{
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },function(err,client){
      if(err){
        reject(err)
      }
      else{
        // const collection = client.db("Proyect").collection("MyProyect");
        console.log("conected")
        client.close();
        resolve('conected')
      }
    })  
  })
  return prom
}