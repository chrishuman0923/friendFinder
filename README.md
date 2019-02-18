# Friend Finder

friendFinder is an application that brings the front-end and back-end of web development together. The app is deployed on Heroku [here](https://pure-escarpment-26498.herokuapp.com/).

## Functionality

A user fills out the survey and then is matched with another user who they are most compatible with based on their answers.

## Notes
The front-end is made up of 2 html files that get served by the back-end server files using Express.js. The back-end files handle all of the url routing and returning of JSON data to the front-end. All pathways are being parsed using Node "Path". This insures that no matter what OS is running the application, the "/" or "\" will be correct for the OS to navigate between the files.

## Getting Started

## Technologies Used
- HTML 5
- CSS 3
- Bootstrap
- JavaScript
- Node
- NPM
- Express.js
- Heroku
- URL Routing

## Future Enhancements
- Improve backend logic to not match you to the same user twice or to yourself if you submit the survey more than once
- Only show one survey question at a time to prevent having to scroll all the way through the questions.
