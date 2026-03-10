"use server";

import { collections, dbconnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
  try {
    const services = await dbconnect(collections.SERVICES).find().toArray();

    // convert id to string otherwise it will give error 
    return services.map((service) => ({
      ...service,
      _id: service._id.toString(),
    }));
  } catch (error) {
    console.error("getServices error:", error);
    return [];
  }
};

export const getSingleService = async (id) => {
  try {
    if (id?.length !== 24) return null;

    const query = { _id: new ObjectId(id) };
    const service = await dbconnect(collections.SERVICES).findOne(query);

    if (!service) return null;

    return { ...service, _id: service._id.toString() };
  } catch (error) {
    console.error("getSingleService error:", error);
    return null;
  }
};