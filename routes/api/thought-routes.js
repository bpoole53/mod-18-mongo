const router = require('express').Router();

const {
  getAllThoughts,
  getOneThought,
  addThought,
  updateThought,
  removeThought,
  addReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(addThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(removeThought);

router.route('/reaction').post(addReaction);

module.exports = router;