This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [Node](#node)
  - [Testing Components](#testing-components)
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

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>


## Available Scripts

In the project directory, you can run:

### `yarn or npm install`

Install app dependencies. The app will crash if you ignore this script

### `yarn start or npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.



## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).





### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](https://facebook.github.io/jest/docs/en/expect.html#content).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot of value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.


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






