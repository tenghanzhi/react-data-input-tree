# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Page Link: https://tenghanzhi.github.io/react-data-input-tree/

# Task
Create a React component that takes in a data schema definition in JSON and renders a data input tree in the style as shown in the above image.


An example data schema definition (a simplified subset of the schema for the above image):

`{

    "parent": "string",

    "components": {

        "unit": {

            "unitType": [ "UNIT", "MISSILE", "STRUCTURE" ]

        },

        "unitStats": {

            "radius": "number",

            "invulnerable": "boolean",

            "ground": "boolean"

        }

    }

}`

# Requirements
The implementation should be able to accept any valid data schema defined in JSON and render a tree according to the schema. There is no limit on the tree’s depth and different tree branches can have different depths.
The rendered data input tree should match the style in the given image as closely as possible (including size, color, padding, decorations, etc). Note that the input tree in the image uses a more complex schema definition than what’s given in this test and your implementation is expected to have a few differences from the image. Things that are not apparent from the image:
Each line should alternate in background color for readability.
Subtrees are collapsible.
Support the following field data types: string, number, boolean and dropdown. In the data schema, dropdown is represented as a list of string values (such as the “unitType” field in the example schema).
# Optional Challenges
These are not requirements but should also be taken into consideration when you implement the input tree:

Create reusable and customizable sub-components.
The input tree should be able to import/export data in JSON format.
Be able to handle a very large input tree efficiently (e.g., a data schema with more than 1000 fields).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
