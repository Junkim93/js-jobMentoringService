import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  video: {
    type: mongoose.Schema.Types.ObjectId, // 어떤 의미를 가지는지
    ref: "Video"
  }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;

// 한 쪽에서 video 를 생성하고 다른 쪽에서 comments 를 생성 시켰을 때
// 1. comment 에 video의 ID 를 가지고 있을 때
// 2. video가 ID의 array 를 가지고 있을 때
