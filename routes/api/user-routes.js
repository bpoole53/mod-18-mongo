const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  removeUser,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(addUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(removeUser);

module.exports = router;