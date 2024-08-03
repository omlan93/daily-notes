import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected seccessfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error.Please make sure MongoDB is running. " + err
      );
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
