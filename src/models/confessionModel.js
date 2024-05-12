import mongoose, { mongo } from 'mongoose';

const confessionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Confession = mongoose.models.confessions ||mongoose.model('confessions', confessionSchema);

export default Confession;
