import connectToDatabase from "../../../../lib/connectToDatabase";
import { Collection, MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbClient: MongoClient = await connectToDatabase();
    const cardsCollection: Collection<Document> = dbClient
      .db("cards")
      .collection("cards");
    const randomDocumentArray = await cardsCollection
      .aggregate([
        {
          $match: {
            name: { $ne: "Garth One-Eye" },
            "legalities.vintage": "legal",
            type_line: { $not: { $regex: /Land/ } },
          },
        },
        { $sample: { size: 60 } },
        { $project: { name: 1 } },
      ])
      .toArray();
    return NextResponse.json(randomDocumentArray, {
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
