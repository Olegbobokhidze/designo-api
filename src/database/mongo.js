import mongoose from "mongoose";

const connect = () => {
  const url = process.env.MONGO_URL;
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
