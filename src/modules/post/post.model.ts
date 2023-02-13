import mongoose from 'mongoose';

const postSchema = new mongoose.Schema<any, any>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model<any, any>('Post', postSchema);

export default Post;
