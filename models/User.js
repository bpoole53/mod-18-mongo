const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
});

const User = model('User', userSchema);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

module.exports = User