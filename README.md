# be-challenge-fall-2022
Shopify Back End Developer Intern Challenge - Fall 2022

## Try my App
[Click here to open app](https://replit.com/@ZakMc/be-challenge-fall-2022?v=1)

## The Challenge
Build an inventory tracking web application for a logistics company. We are looking for a web application that meets the requirements listed below, along with one additional feature, with the options also listed below. 

You can tackle this challenge using any technology you want. This is an open-ended task, but we want to focus on high quality back-end code. Custom UIs and interactive frameworks like React are not necessary. Ideally, the web application can run within 15 minutes.

## My Application
I chose to use express-generator which uses express.js and pug for templating. It sets up an empty application skeleton. 
On top of that I added pug html templates, routes, utility functions and controllers to complete the app. 
I made a basic json database (db.json) and a database module (util/database.js) with common functions for db use. 
I made some test for it which if run will reset the db.json to a default starting version.

For the extra tasks I chose and implemented when deleting, allow deletion comments and undeletion. I accomplished this by not actually deleting items
from the database and instead just added a deleted field to mark true or false as well as a field for deletedComment. I added a route specifically for
undeleting and also added a checkbox on the edit item form to modify deleted state.

## Running the App locally
 - Clone the git repository
 - cd into the cloned repository
 - run ```npm install``` (installs node modules)
 - optionally run ```npm test``` (runs test and resets db.json to default starting shape)
 - run ```npm start``` (starts app on http://localhost:3000/ with nodemon rewatching for changes)
