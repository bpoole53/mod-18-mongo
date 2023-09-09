const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  _id: Schema.Types.ObjectId,
  thoughtText: { 
    type: String, 
    required: true, 
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String, 
    required: true,
  },
  reactions: [reactionSchema],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought