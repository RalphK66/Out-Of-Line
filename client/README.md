# Out-of-Line

This is the repository of the web application **Out-of-Line**. Here you will find our code for the application, alongside other various assets. This README file contains all the necessary information to set up a local environment and run it on your machine.

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