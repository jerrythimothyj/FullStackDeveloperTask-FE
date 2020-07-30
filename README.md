# `Github Searcher`

### Functional Requirements
- 2 input fields: On the input box, the user types the text that they want to search; On the combo box the user selects the entity they want such as Users, Repositories or Issues.
- When the user starts typing, make a backend call after a debounce.
- The output is a list of cards in a 3 column layout as default and 2 column layout when the screen's width is less than or equal to 768px.
- The search should happen after the user has typed 3 or more characters.
- If the user clears the input or types less than three characters, clear the results and show the empty screen.
- Display the details of the entities returned in the cards.
- Show the loading status to the user.
- Show the error / validation messages to the user.

### Technical Requirements
- Create a single page application using ReactJS, Typescript, Redux, Redux-Persist and React Router.
- The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.
- Vanilla CSS, Sass, Styled Components or any other CSS-in-JS but no frameworks allowed.
- Use modern ES6+ syntax, async/await, elegant & readable code.


## Functional Requirements
### - 2 input fields: On the input box, the user types the text that they want to search; On the combo box the user selects the entity they want such as Users, Repositories or Issues.

![2 input fields: On the input box, the user types the text that they want to search; On the combo box the user selects the entity they want such as Users, Repositories or Issues.](http://bigjapps.com/images/Untitled.gif)


### - When the user starts typing, make a backend call after a debounce.

![When the user starts typing, make a backend call after a debounce.](http://bigjapps.com/images/Untitled1.gif)

### - The output is a list of cards in a 3 column layout as default and 2 column layout when the screen's width is less than or equal to 768px.

![The output is a list of cards in a 3 column layout as default and 2 column layout when the screen's width is less than or equal to 768px.](http://bigjapps.com/images/Untitled22.gif)

### - The search should happen after the user has typed 3 or more characters.
![The search should happen after the user has typed 3 or more characters.](http://bigjapps.com/images/Untitled3.gif)


### - If the user clears the input or types less than three characters, clear the results and show the empty screen.
![If the user clears the input or types less than three characters, clear the results and show the empty screen.](http://bigjapps.com/images/Untitled4.gif)

### - Display the details of the entities returned in the cards.
![Display the details of the entities returned in the cards.](http://bigjapps.com/images/Untitled5.gif)

### - Show the loading status to the user.
![Show the loading status to the user.](http://bigjapps.com/images/Untitled6.gif)

### - Show the error / validation messages to the user.
![Show the error / validation messages to the user.](http://bigjapps.com/images/Untitled7.gif)

`Note:` The above scenario is made to fail on purpose by modifying the code


# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
