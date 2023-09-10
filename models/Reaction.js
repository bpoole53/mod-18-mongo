const Schema = require('mongoose');

const reactionSchema = new Schema.Schema({
  _id: Schema.Types.ObjectId,
  reactionId: {
    type: Schema.Types.ObjectId,
    default: Schema.Types.ObjectId,
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

module.exports = reactionSchema





