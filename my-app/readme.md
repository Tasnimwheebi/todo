# LAB - Hooks API
**To Do List Manager Phase 1:** Begin the build of an application designed for creating and organizing a "To Do" list in your browser.

In this initial phase, we're going to have to start by converting a legacy application into a more modern architecture. Our initial "Proof of Concept" was written using class based components and was not properly styled. Now that our client has given us the "green light" for development, we're going to refactor the application using Hooks and upgrading the style.

## Technical Requirements / Notes
- Convert the architecture from **Class Based Components** into **Functional Components**
- Apply styling and layout using React Bootstrap Components
- Ensure the current functionality works unchanged
- Manage state using the `useState()` hook
- Use a `useEffect()` hook to change the title of the browser with the complete/incomplete counts
- Use a `useEffect()` hook to pre-load the seeded To Do Items
- Match the provided mockup for the design
  - Use `react-bootstrap` components and theming
  - Some interactivity notes:
    - Each item in list should show the text of the item as well as the assignee
    - When clicked, toggle the "complete" status of the item.
    - Items should be styled differently when complete/incomplete making their status visually obvious

## start the app : 
                    npm start 
## dependencies : 
                npm i react-bootstrap 
                npm i bootsstrap 


## Phase 3 Requirements
* As a user, I would like to see my To Do List Items a few at a time so that I don’t have to wade through them all
* As a user, I would like my default view to only be “Incomplete” Items so that I can quickly determine what I have to do.
* As a user, I would like my list sorted by difficulty so that I can more easily prioritize
* As a user, I would like the option to change my default preferences with regards to how many Items I see per page, which items are filtered, and how they are sorted