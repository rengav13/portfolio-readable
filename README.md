# Readable Web App

> A content comment web app developed in react with redux

## Description

This is a content comment web app developed for the final assessment for Udacity's Redux course. In this app, the users 
will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts
and comments. Users will be able to edit and delete posts and comments. The app was developed in react with additional 
libraries, like: redux for state management, axios for REST communication, and material UI for front-end design.

## Demo

<img src="/readable-demo.gif" />

## Installation and Running

* Install dependencies for API server:
    - `cd api-server`
    - `npm install`

* Run the API server:
    - `node server`
    
* Install dependencies for front end:
    - `cd app`
    - `npm install`
    
* Run the front end:
    - `npm start`

## Front end structure & organization

We follow the organization by capability pattern, so we have a folder for each technical concept. 
The next figure shows how the application is structured.

 ```bash
 ├── src
     ├── actions
          ├── types.js # Holds application actions type
          ├── ...
     ├── reducers
          ├── ...
     ├── services # Classes used to communicate with API server
          ├── api.js # Global axios configuration
          ├── ...
     ├── util # Utilitary files used to centralize commom operations
          ├── ...     
     ├── components
          ├── ...
     ├── pages # Holds all application user pages
          ├── ...
     ├── App.js # This is the root of the app
     └── index.js # It is used for DOM rendering only.
 ```

The concepts of page and component are distinct. Components are the building blocks of the application. Pages are the views 
shown to the user. Besides that, each page is composed by components, and components can be composed by another components.

The communication with the API is provided by axios. All classes that uses axios are in service folder. In that folder has 
a file called `api.js`, it contain the axios global configuration, as the base URL and authentication tokens.

## External Libraries

* [Redux: A predictable state container for JavaScript apps.](https://redux.js.org/)
* [redux-thunk: Thunk middleware for Redux](https://github.com/reduxjs/redux-thunk)
* [React Icons: Include popular icons in your React projects easly](https://react-icons.netlify.com/#/)
* [Material UI: React components that implement Google's Material Design.](https://material-ui.com/)
* [Axios: Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)
* [Lodash: A modern JavaScript utility library delivering modularity, performance & extras.](https://lodash.com/)
* [Moment.js: Parse, validate, manipulate, and display dates and times in JavaScript.](https://momentjs.com/)

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## References

* [Using Axios with React](https://alligator.io/react/axios-react/)

## License

The content of this repository is licensed under [MIT License](/LICENSE)