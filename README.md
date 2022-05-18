# be-challenge-fall-2022
Shopify Back End Developer Intern Challenge - Fall 2022

## Try My App
[Click here to open app](https://be-challenge-fall-2022.zakmc.repl.co/)  
[Click here to open the Replit page](https://replit.com/@ZakMc/be-challenge-fall-2022)



How to use the app:
 - to create an item, click the "Create Item" link in the nav bar and fill in the form
 - to view inventory items click on the "View Inventory Items" in the nav bar, a list of all active items will be displayed
 - to view all deleted items click on the "View Deleted Items" in the nav bar, a list of all deleted items will be displayed
 - to view a specific item, you can click the "View" button when on a view items page
 - to edit an item, you can click the "Edit" button when on the "View Inventory Items" page or a specific item page
 - to delete an item you can click the "Delete" button when on the "View Inventory Items" page or a specific item page, you can add an optional delete comment when using the delete item form
- to undelete an item you can click the "Undelete" button when on the "View Deleted Items" page or a specific deleted item page
 - you can also delete/undelete an item in the edit item form (see above to edit item) by ticking the "Mark as Deleted" checkbox appropriately


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
