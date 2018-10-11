

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents


- [Dependencies](#dependencies)
- [Why REACT](#why-react)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [Node](#node)
- [Making a Progressive Web App](#making-a-progressive-web-app)


## Folder Structure

After creation, your project should look like this:

```
starship-resupply-calculator/
  README.md
  node_modules/
  package.json
  public/
    assets/js
    assets/css
    index.html
    favicon.ico
  src/
    api
    methods
    ui/Home    
    css/App.css
    test/  
    index.js
    
```

## Dependencies
`nodejs` | Recommended version `node v10.4.0`.
If you don't have node, visit: [node](#https://nodejs.org) 
Once installed you wiil be able to use `npm`. You need it anyway :)

## Why REACT
Good Question. React is taking over the front-end world. As a developer you want make sure that you and your projects remain relevant. Then you need [REACT](#). 

React helps you build apps in less time. How you ask.Well take note of the following advantages

  - The use of reusable, composable
  - stateful components
  - Works with tech language that allows you to [test](#https://jestjs.io/) individual componenent. Your Team needs this concepts,so do you!
  - Easy to learn
  -  Manage App lifecycle with easy.
  - Professionally this app can be built in less than 120 minutes 😮. I know!
  - The syntax looks cool in Visual Studio 😁
  - When you learn it, add your adavnateges to this list.
  - 


## Available Scripts

In the project directory, you can run:

### `yarn or npm install`

Install app dependencies. The app will crash if you ignore this script

### `yarn start or npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>
Take  note of the terminal output for errors.


## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).




## Making a Progressive Web App

The production build has all the tools necessary to generate a first-class
[Progressive Web App](https://developers.google.com/web/progressive-web-apps/),
but **the offline/cache-first behavior is opt-in only**. By default,
the build process will generate a service worker file, but it will not be
registered, so it will not take control of the production web app.

In order to opt-in to the offline-first behavior, you should look for the
following in  [`src/index.js`](src/index.js) file:

```js
// If you want the app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
```

As the comment states, switching `serviceWorker.unregister()` to
`serviceWorker.register()` will opt you in to using the service worker.
                                                                   |

## Troubleshooting
 
- Error: `React script not found`  <br />
    When you get the above error,most likely you forgot to run `npm start`
- node command not found
  Please make sure you have node installed. <br />
  Recommended Version : `node v10.4.0`
- Would you like to run the app on another port instead (y/n):
  The above message will pop-up when you have another app running on port `:3000`.
  Type `y` to run the app on a different port. You will probally get `localhost:3002`.






