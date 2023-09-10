const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers);

router.route('/:userId').get(getOneUser);

module.exports = router;