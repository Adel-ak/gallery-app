
##NOTE

This project fetches data from flickr, you are required to get an [API Key](https://www.flickr.com/services/api/misc.api_keys.html) from flickr.com.

Once you have obtained a API key fellow this steps

1. Cerate a file called config.js and place it in the components folder

2. Declare 2 variables apiKey and endPoint

apiKey should have the value of the api key you were given by flickr

endPoint should have the value of flickrs api url (url given below)

```
const apiKey = 'the key you obtained should be here';
const endPoint = `https://www.flickr.com/services/rest/?api_key=${apiKey}&format=json&nojsoncallback=1&per_page=24`;
```

3. Export the variables

```
export {
    apiKey,
    endPoint
};
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
