import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

export interface Dino {
  name: string;
  era: string;
  diet: string;
  region: string;
  feetTall: number;
  feetLong: number;
  pounds: number;
}

export async function getDinos(): Promise<any> {
  const client = new MongoClient();
  client.connectWithUri('mongodb://localhost:27017');

  const db = client.database('denosaurs');
  const dinosCollection = db.collection('dinos');

  return await dinosCollection.find();
}

export async function getDinoById(id: string): Promise<any> {
  const client = new MongoClient();
  client.connectWithUri('mongodb://localhost:27017');

  const db = client.database('denosaurs');
  const dinosCollection = db.collection('dinos');

  return await dinosCollection.findOne({ _id: id });
}

export async function createDino(dino: Dino): Promise<any> {
  const client = new MongoClient();
  client.connectWithUri('mongodb://localhost:27017');

  const db = client.database('denosaurs');
  const dinosCollection = db.collection('dinos');

  return await dinosCollection.insertOne(dino);
}
