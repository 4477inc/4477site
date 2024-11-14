import { MongoClient, Db } from "mongodb";

export default async function connectToDatabase(): Promise<MongoClient> {
    const client = new MongoClient("mongodb://localhost:27017/4477");
    const connectedClient = await client.connect();
    return connectedClient;
}