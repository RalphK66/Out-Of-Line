# Out-of-Line

This is the repository of the web application **Out-of-Line**. Here you will find our code for the application, alongside other various assets. This README file contains all the necessary information to set up a local environment and run it on your machine.

This project was constructed by group **DTC-05** or Out-of-Line. This group consisted of David Han, Ralph Killian, Kyrill Metalnikov and Janelle Kwok. 

The production version of this application is hosted on **AWS** using an **NGINX** server. You may choose a different way to host this application.

## Languages, IDEs and Frameworks Needed to Run the Application:
- Node.js
- React
- Bootstrap (Reactstrap)
- JQuery
- Popper.js
- MySQL and MySQL Workbench
- Mapbox API
- Microsoft Visual Studio Code and/or JetBrains Webstorm

For dependencies, run `npm install` in both the `client` and `api` folders. For both, the `package.json` and `package-lock.json` files will show a full list of the project's dependencies.

---

## .env File Values
#### API
- DB_ADMIN_USERNAME
- DB_ADMIN_PASSWORD
- DB_NAME
- SECRET_JWT_STRING

#### Client
- REACT_APP_MAPBOX_API_ACCESS_TOKEN
- REACT_APP_API_URL

Ensure that your `.env` files for these folders are configured to have these variables.

### API Key
- Mapbox

To use the Mapbox API, an API access token must be generated and added to the `.env` file in `client` folder. 

---

## Order of Installation
There is no direct order of installation, but certain things must be installed before another.

#### Phase One
- Microsoft Visual Studio Code/ Webstorm
- Node.js
- MySQL
- JQuery
- Popper.js

#### Phase Two
- **React** (Install React first in this phase.)
- Bootstrap (Reactstrap)
- Mapbox API (configure your local machine's version of Mapbox)

---

## Testing Plan
Our testing plan for our application can be viewed here: https://docs.google.com/spreadsheets/d/1FG3ayaQWjqGr23QBUJt0q_kSF3hqLMbjlWxxjH3nIaI/edit?usp=sharing

--- 

## Repository Structure 

Our repository has its back-end and front-end components split up into different folders. The back-end is labelled `api` and the front-end is labelled `client`. The `client` folder holds all of the React components, front-end logic and the images/assets. It is the `view` in `model, view, controller`. The `api` folder holds all of back-end and server logic. It also provides a connection to the database. It is the `controller` in `model, view, controller`.

In `client` there are the `public` and `src` folders. The `public` folder contains the `index.html` and `index.js` files that provide the base framework for the rest of the React application. The `src` folder contains the various React components and CSS styling pages. The assets for the site are found here as well. You can run the React application by running the command `npm start` in this directory.

In `api` there are the `bin`, `node_modules`, `routes` and `views` folders. Alongside those, there is the `app.js` which is the main server file, the `db.js` which provides a connection to the database and `schema.sql` and `seeds.sql` which both create tables/procedures/functions in the database and populates the tables respectively. The `bin` folder contains information specific for running an instance of the backend, including which url it runs on. The `routes` folder contains the back-end information for querying from the database and manipulating that data. You can run the server by running the command `npm start` in this directory.

#### Out-of-Line

*Italicized* folders/files are prevented from being pushed to GitHub using the .gitignore file.

- #### api
    - bin
    - *node_modules*
    - routes
    - views
    - app.js
    - db.js
    - *.env*
    - package-lock.json
    - package.json
    - schema.sql
    - seeds.sql

- #### client
    - *node_modules*
    - public
    - src
        - auth
        - css
        - html-pages
        - images
        - notifications
        - routes
        - App.js
        - App.test.js
        - index.css
        - index.js
        - serviceWorker.js
        - setupTests.js
    - *.env*
    - *.gitignore*
    - package-lock.json
    - package.json
    - README.md

- .gitignore
- README.md