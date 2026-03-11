"use server";

import { collections, dbconnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { success } from "zod";

export const postUser = async (payload) => {
  const { nid, name, email, contact, password } = payload;
  //check payload
  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  //check user
  const isExist = await dbconnect(collections.USERS).findOne({ email });

  if (isExist) {
    return { success: false, message: "User already exists" };
  }
  //create user
  const newUser = {
    provider: "credentials",
    nid,
    name,
    email,
    contact,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };
  //insert user
  const result = await dbconnect(collections.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return { success: true, message: "Registration successful" };
  }

  return { success: false, message: "Something went wrong" };
};

export const logInUser = async (payload) => {
  const { email, password } = payload;

  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  //check user
  const user = await dbconnect(collections.USERS).findOne({ email });
  if (!user)
    return {
      success: false,
      message: "user not found!!!",
    };
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    return user;
  } else {
    return {
      success: false,
      message: "password not found!!!",
    };
  }
};
