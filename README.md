# FitFood_API
Returns specific nutritional information for foods and meals.
**Food names** **calories** **protein** **cholesterol** **carbohydrate** **fiber**

NodeJs and express project created.

## Required facility facilities:
npm install

npm install express

npm -g nodemon

## Required settings:
Changing package.json in scripts adds **"start": "node app"**

Create file named Procfile with code: **web: npm start**

To use in local host use the port configured in the code and in the browser type: localhost:**port**/foods?title= **Type the food you want to look for**

To host the REST API I used heroku, access link: http://app-fitfood.herokuapp.com/foods?title= **Type the food you want to look for**

## Run localhost api
Type in the terminal: **node app** or **nodemon app**

The nodemon automatically updates the execution if it has changes in the API code.