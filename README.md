# Mobile Overflow Menu

You are tasked with implementing our bottom session menu on mobile (either web or app). This menu contains session information, as well as settings. The session information should be retrieved from a mock async API call or an online service like [jsonplaceholder](https://jsonplaceholder.typicode.com/) or [mockapi](https://mockapi.io/).

- Add an option (button or checkbox) for users to select or deselect all checkboxes at once
- Disable the OPEN button for 30 seconds after every 3 clicks and display the countdown timer inside the button

## Structure and details

- `hooks/useTimer` : custom hook to count down
- `redux/slices` : save slices data for redux state management
- `services/comment` : createApi service to get jsonplaceholder comments data, from RTK query
- `assets/images` : includes assets for project
- `pages/Home` : includes files for pages
- `components/` : includes components which we use for this project more than twice or can be split into
- `styles/` : includes tailwind style and postcss index styles


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
