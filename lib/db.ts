import {MongoClient, ObjectID} from "mongodb"

const _db = 'shedscores';
const _conn = `mongodb://localhost:27017/${_db}`;   // TODO: move configs to file ?
const _collection = 'scores';

export async function getData() : Promise<Score[]> {
    return new Promise((resolve, reject) => {
        MongoClient.connect(_conn, (err, client) => {
            if (err) 
                reject(err);
            else {
                const db = client.db(_db);
                db.collection(_collection).find().toArray((err, result) => {
                if (err) 
                        reject(err);
                    else
                        resolve(result);
                })
             }            
        })
    });
}