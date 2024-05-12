import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  confessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Confession',
    },
  ],
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
