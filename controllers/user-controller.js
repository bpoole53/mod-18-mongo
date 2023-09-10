const User = require('../models/User');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // just get one user
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add a user
  async addUser(req, res) {
    try {
      const user = await User.insertMany(req.body, {ordered: false});
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  },
  // find and update a user
  async updateUser(req, res) {
    try {
      const userId = req.params.userId
      const updateInfo = req.body

      const user = await User.findByIdAndUpdate(userId, updateInfo, {new: true});

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
  },
  //find and remove a user
  async removeUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      } else {
        res.json({ message: 'User has been removed'})
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },



}  


