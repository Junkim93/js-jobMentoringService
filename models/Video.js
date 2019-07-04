import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const model = mongoose.model("Video", VideoSchema);

export default model;

// 새로운 몽구스의 스키마를 생성
// 비디오 자체를 DB에 저장하지 않는다.
// bytes 가 아닌 video link
// just text database
// 발생할 수 있는 에러를 다 잡는 것이 좋음
// try & catch
// 
