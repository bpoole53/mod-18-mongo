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
  
}  

