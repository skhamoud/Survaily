const keys = require('../../config/keys');
/** Returns an html survey template from the survey data
 * @param {object} survey  */
module.exports = survey => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  </head>
  <body>
    <div style="text-align: center;">
      <h3>I'd like your input </h3>
      <p>Please answer the following question:</p>
      <p>${survey.body}</p>
    <div>
      <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
    </div>
    <div>
      <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
    </div>
    </div>
  </body>
  </html>
  `;
