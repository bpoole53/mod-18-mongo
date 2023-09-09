const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  reactionBody: {
    type: String, 
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String, 
    required: true,
  },
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction





