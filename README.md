# `Github Searcher`
<br/><br/>
### Functional Requirements
<br/><br/>
- 2 input fields: On the input box, the user types the text that they want to search; On the combo box the user selects the entity they want such as Users, Repositories or Issues.
- When the user starts typing, make a backend call after a debounce.
- The output is a list of cards in a 3 column layout as default and 2 column layout when the screen's width is less than or equal to 768px.
- The search should happen after the user has typed 3 or more characters.
- If the user clears the input or types less than three characters, clear the results and show the empty screen.
- Display the details of the entities returned in the cards.
- Show the loading status to the user.
- Show the error / validation messages to the user.

<br/><br/>
### Technical Requirements
<br/><br/>
- Create a single page application using ReactJS, Typescript, Redux, Redux-Persist and React Router.
- The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.
- Vanilla CSS, Sass, Styled Components or any other CSS-in-JS but no frameworks allowed.
- Use modern ES6+ syntax, async/await, elegant & readable code.

<br/><br/>
## Functional Requirements
<br/><br/>
### - 2 input fields: On the input box, the user types the text that they want to search; On the combo box the user selects the entity they want such as Users, Repositories or Issues.
<br/><br/>

![2 input fields: On the input box, the user types the text that they want to search; On the combo box the user selects the entity they want such as Users, Repositories or Issues.](http://bigjapps.com/images/Untitled.gif)
<br/><br/>

### - When the user starts typing, make a backend call after a debounce.
<br/><br/>
![When the user starts typing, make a backend call after a debounce.](http://bigjapps.com/images/Untitled1.gif)


<br/><br/>


### - The output is a list of cards in a 3 column layout as default and 2 column layout when the screen's width is less than or equal to 768px.
<br/><br/>
![The output is a list of cards in a 3 column layout as default and 2 column layout when the screen's width is less than or equal to 768px.](http://bigjapps.com/images/Untitled22.gif)
<br/><br/>
### - The search should happen after the user has typed 3 or more characters.<br/><br/>
![The search should happen after the user has typed 3 or more characters.](http://bigjapps.com/images/Untitled3.gif)

<br/><br/>
### - If the user clears the input or types less than three characters, clear the results and show the empty screen.<br/><br/>
![If the user clears the input or types less than three characters, clear the results and show the empty screen.](http://bigjapps.com/images/Untitled4.gif)
<br/><br/>
### - Display the details of the entities returned in the cards.<br/><br/>
![Display the details of the entities returned in the cards.](http://bigjapps.com/images/Untitled5.gif)
<br/><br/>
### - Show the loading status to the user.<br/><br/>
![Show the loading status to the user.](http://bigjapps.com/images/Untitled6.gif)
<br/><br/>
### - Show the error / validation messages to the user.<br/><br/>
![Show the error / validation messages to the user.](http://bigjapps.com/images/Untitled7.gif)
<br/><br/>
`Note:` The above scenario is made to fail on purpose by modifying the code



<br/><br/>
## Technical Requirements
### - Create a single page application using ReactJS, Typescript, Redux, Redux-Persist and React Router.<br/><br/>
![Create a single page application using ReactJS, Typescript, Redux, Redux-Persist and React Router.](http://bigjapps.com/images/tech.png)
<br/><br/>
In order to keep things simple, I have created a simple react application which includes the state manager of redux and redux saga to help play with the state.
Redux-Persist to avoid same data getting called by the network again. Right now, applied redux-persist directly to the only store that we have "github". No transformations.
<br/><br/>
### - The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.
<br/><br/>
![The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.](http://bigjapps.com/images/tech1.png)
<br/><br/>
![The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.](http://bigjapps.com/images/tech2.png)
<br/><br/>
![The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.](http://bigjapps.com/images/tech3.png)
<br/><br/>
![The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.](http://bigjapps.com/images/tech4.gif)
<br/><br/>
- We know that in web version of redux-persist the default storage is the local storage, and so, when the page is reloaded we want to retrieve the data. So, we just simply load the data on load from the local storage using the reducer.


<br/><br/>
### - Vanilla CSS, Sass, Styled Components or any other CSS-in-JS but no frameworks allowed.
![Vanilla CSS, Sass, Styled Components or any other CSS-in-JS but no frameworks allowed.](http://bigjapps.com/images/tech5.png)

Honestly, I really wanted to use BEM model.:cop:
<br/><br/>
### - Use modern ES6+ syntax, async/await, elegant & readable code.

So, the story goes like this:
- The app starts at index.tsx and routes to App component.
- The index.tsx contains the Provider,PersistGate and the Router.
- App component contains the loader, toaster and the Github component.
- The loader and the toaster could have been done with DATA_PROCESSING and DATA_LOAD_ERROR actions but just used rxjs observables. :v:
- On Page load, if the data already persists in the local storage, it displays from that data.
- If there is no data already present, and since there is no search criteria, there will be no data displayed or no network call is made.
- Once the user types 3 or more characters and with a 500ms debounce, it calls the fetchData action and goes through the saga and the api call is made via axios.
- The interceptors will take care of the loader and the error responses via rxjs observables.
- We have a good amount of form components and card components.
- A little of unit tests just to show off but not really breaking-tests.:weary:
<br/><br/>
### Limitations:
- After an error/validation occurs, the working condition is not reset. Just kept it like that. Have to correct it in the sagas.
- Less unit testing. I prefer more of E2E's with Selenium or Puppeteer.
- Name of the user comes from the Users api of Github and not the Search api. What we can do is that we can have a button to open more details and retrieve the User details from the Users api.:construction: