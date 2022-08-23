import mongoose from "mongoose"

const PostSchema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likes:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

 const post = mongoose.model("post", PostSchema)

 export default post