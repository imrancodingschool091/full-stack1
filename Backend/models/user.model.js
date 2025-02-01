import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    age: Number,
    city: String,
    phone: Number,
  },
  
);

export const User = mongoose.model("User", UserSchema);
