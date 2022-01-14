# Card Game App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

A simple card game app built using Typescript and React Hooks.

This assignment was to be done in vanilla JS or jQuery, but I found it a good opportunity to practice TS and Hooks, as it's been over 9 months since I've touched React.

The instructions for the project were here:

  1. Clicking the button should generate two random hands in memory (console.log).
  2. Clicking the button should render two random hands on the page as cards.
  3. Determine the winning hand by its number of pairs, add class="winning" to hand.
  4. Determine winning pairs and add class="pair0" (or "pair1" for 2nd pair) to cards.
  5. [Extra Credit] Ensure that 90% of hands have at least one pair.

I opted to skip attempting to complete the extra credit portion. I was interested in building and experimenting with a randomized deck with TS types, which would make step 5 impossible.

Otherwise, this performs the task properly. There are a few enhancements I could perform, and those will be listed as issues.

## To run locally

1. Clone this repository
1. In the console, run `npm run start`
1. CRA should open the browser to `http://localhost:3000/`. If not, do so manually

## Available CRA Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
