import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = await params;
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const res = await servicesCollection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
};
