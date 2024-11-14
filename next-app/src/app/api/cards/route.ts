import connectToDatabase from "../../../lib/connectToDatabase";
import { Collection, MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbClient: MongoClient = await connectToDatabase();
    const cardsCollection: Collection<Document> = dbClient
      .db("cards")
      .collection("cards");
    const randomDocumentArray = await cardsCollection
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();
    const randomDocumentJSON = randomDocumentArray[0];
    const randomName = randomDocumentJSON.name;
    return NextResponse.json(randomName, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
