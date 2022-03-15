const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Feedback = require('../../models/Feedback');
const validateFeedbackInput = require('../../validations/feedbacks')

router.post('/new', (req, res) => {
  // passport.authenticate('jwt', { session: false }),

    const { errors, isValid } = validateFeedbackInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newFeedback = new Feedback({
      // user: req.user.id,
      // video: req.video.id,
      user: req.body.user,
      video: req.body.video,
      positive: req.body.positive,
      negative: req.body.negative,
    });

    newFeedback.save().then(feedback => res.json(feedback));
  }
);

// update feedback

router.patch('/edit/:id', (req, res) => {
  // res.json({ msg: "This is the feedback for that video" });
  Feedback.findById(req.params.id)
    .then(feedback => {
      feedback.user = req.body.user
      feedback.video = req.body.video
      feedback.positive = req.body.positive
      feedback.negative = req.body.negative

      feedback.save().then((feedback) => res.json(feedback));
    })
    .catch(err =>
      res.status(404).json({ nofeedbackfound: 'No feedback found with that ID' })
    );
});

// delete feedback

router.delete('/delete/:id', (req, res) => {
  // res.json({ msg: "This is the feedback for that video" });
  Feedback.findByIdAndDelete(req.params.id)
    .then(feedback => res.json(feedback))
    .catch(err =>
      res.status(404).json({ nofeedbackfound: 'No feedback found with that ID' })
    );
});

module.exports = router;