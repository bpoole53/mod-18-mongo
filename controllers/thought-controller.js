const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // just get one thought
  async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No such thought exists' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  },
  // add a thought
  async addThought(req, res) {
    try {
       
      const thought = await Thought.insertMany(req.body);

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
      res.json({thought, user});
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  },
  // find and update a thought
  async updateThought(req, res) {
    try {
      const thoughtId = req.params.thoughtId
      const updateInfo = req.body

      const thought = await Thought.findByIdAndUpdate(thoughtId, updateInfo, {new: true});

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  },
  //find and remove a thought
  async removeThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No such thought exists' });
      } else {
        res.json({ message: 'Thought has been removed'})
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //add a reaction to a thought
  async addReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { new: true, runValidators: true }
        );
  
        if (!reaction) {
          return res.status(404).json({ message: 'No such thought exists' });
        }
  
        res.json(reaction);
      } catch (err) {
        res.status(500).json(err);
      }
  },  
  //remove a reaction
async removeReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: {reactionId: req.params.reactionId}}},
          { new: true, runValidators: true }
        );
  
        if (!reaction) {
          return res.status(404).json({ message: 'No such reaction exists' });
        } else {
          res.json({ message: 'Reaction has been removed'})
        }
  
        res.json(reaction);
      } catch (err) {
        res.status(500).json(err);
      }
  },  
}
