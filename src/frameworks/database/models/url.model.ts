import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  maxUsageLimit: {
    type: Number,
    required: true,
    min: 1,
    default: 1000,
  },
  usedCount: {
    type: Number,
    default: 0,
  },
});

const urlModel = mongoose.model("url", urlSchema);

export default urlModel;
