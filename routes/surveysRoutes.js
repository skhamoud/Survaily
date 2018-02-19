const router = require('express').Router();
const sgMail = require('@sendgrid/mail');
const Survey = require('../models/Survey');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

sgMail.setApiKey(require('../config/keys').sendGridKey);
/** Hanldles Fetching surveys */
router.get('/api/surveys', requireLogin, async (req, res) => {
  try {
    const surveys = await Survey.find({ _user: req.user.id });
    res.send(surveys);
  } catch (err) {
    res.status(400).send({ err });
  }
});

/** Handles creating a new Survey */
router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
  const {
    title, subject, body, recipients,
  } = req.body;

  const survey = new Survey({
    title,
    body,
    subject,
    recipients: recipients.split(',').map(email => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now(),
  });

  const msg = {
    to: survey.recipients.map(({ email }) => email),
    from: 'skhamoud@gmail.com',
    subject,
    custom_args: {
      surveyId: survey.id,
    },
    text: body,
    html: surveyTemplate(survey),
  };

  try {
    await sgMail.sendMultiple(msg);
    const newSurvey = await survey.save();

    req.user.credits -= 1;

    const user = await req.user.save();

    res.send({ user, survey: newSurvey });
  } catch (err) {
    res.status(422).send({ error: err });
  }
});

/** Deals with Sendgrid notification webhook */
router.post('/api/survey_wh', async (req, res) => {
  const events = req.body;
  const surveysToUpdate = await Promise.all(events.map(async ({ event, url_offset: link, surveyId }) => {
    if (event === 'click') {
      const survey = await Survey.findById(surveyId);
      const clickedYes = link.index === 0;
      const clickedNo = link.index === 1;

      if (clickedYes) survey.yes += 1;
      else if (clickedNo) survey.no += 1;
      return survey;
    }
  }));
  // Model.create() fires .save() internally for each doc , checkout
  // .bulkWrite() for single trip to db .
  const savedSurveys = await Survey.create(surveysToUpdate);
  console.log(savedSurveys);
  res.sendStatus(200);
});

router.get('/api/surveys/thanks', (req, res) => {
  res.send('<h2> Thank you for your Feedback </h2>');
});

module.exports = router;
