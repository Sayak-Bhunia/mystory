import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Please provide an email address'],
  },
  password: {
    type: String,
    required: true,
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
