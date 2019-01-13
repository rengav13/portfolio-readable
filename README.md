# Readable Web App

> A content comment web app developed in react with redux

## Description

This is a content comment web app developed for the final assessment for Udacity's Redux course. In this app the users 
will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts
and comments. Users will be able to edit and delete posts and comments. 

The app was developed in react. Besides that, it integrates with other libraries, mainly with redux for state management, 
axios for API communication, and material UI for front-end design.  

<img src="/public/readable-demo.png" />

## Run Application

At first, it's needed to install the dependencies of front-end and back-end, then run the application   

* To install the dependencies and start the API server:
    - `cd api-server`
    - `npm install`
    - `node server`
    
* To install the dependencies and start the front-end, open another terminal window, and run: 
    - `cd app`
    - `npm install`
    - `npm start`

## Front end structure & organization

We follow the organization by capability pattern, so we have a folder for each technical concept. 
The next figure shows how the application is structured.

 ```bash
 ├── public
 │   ├── favicon.ico # App Icon.
 │   └── index.html
 └── src
     ├── actions # Holds all applications' actions.
          ├── index.js
     ├── reducers # Holds all applications' reducers.
          ├── ...
     ├── services # Holds all clases that connect with the API by axios.
          ├── api.js # It's responsible for axios configuration.
          ├── ...
     ├── util # Utilitary files, it's used to centralize commom operations.
          ├── ...     
     ├── components # Holds all applications' components. 
          ├── ...
     ├── pages # Holds all applications' user pages.
          ├── ...
     ├── App.js # This is the root of the app.   
     └── index.js # It is used for DOM rendering only.
 ```

The concepts of page and component are distinct. Components are the app's building blocks
and pages are the views shown to the user. So, each page is composed by components, and 
components can be built from another components.

The communication with the API is provided by axios, and it's wrapped by the services' classes.
Those classes are stored in the service folder, so any communication with the API must be done 
by a service. The `api.js` file contain the axios global configuration, as the base URL and 
authentication tokens.

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).
