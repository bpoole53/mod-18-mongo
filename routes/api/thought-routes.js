const router = require('express').Router();

const {
  getAllThoughts,
  getOneThought,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(removeThought);

router.route('/:thoughtId/reaction').post(addReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;