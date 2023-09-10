const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

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
  reactions: [Reaction],
  },
  {
  toJSON: {
    virtuals: true,
  },
  id: false,
  },
);


const Thought = model('Thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function() {
  return `${this.reactions}`.length;
});

module.exports = Thought