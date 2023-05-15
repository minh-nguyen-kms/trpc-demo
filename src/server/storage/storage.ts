import {MongoClient} from 'mongodb';

export const openCollection = async () => {
  const url = 'mongodb://admin:admin@localhost:27017/todos?authMechanism=DEFAULT&authSource=admin';
  const client = new MongoClient(url);
  const connection = await client.connect();
  const db = connection.db();
  return db.collection('todos');
};
