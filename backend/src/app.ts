import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  google_oauth_id: String
});
const User = mongoose.model('User', userSchema);