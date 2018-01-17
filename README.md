# ReduxStarter

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/markchen555/ReduxStarter.git
> cd ReduxStarter
> npm install
> npm start
```

#### How to initialized?

```
> npm install
> npm start
```

#### Definition of each Redux components

- reducer: Arguments to these reducers get two arguments (state, and action).

- container: A container is a react component that has a direct connection to the state managed by redux. Containers are also sometimes called Smart component from redux docs as opposed to a dumb component. In general we wnat the most parent component that cares abouta particular piece of state to be a container. We only create containers out of components that cares about a particular piece of state. Only the most parent component that uses a particular piece of state needs to be connected to redux. Whenever we forge a connection between a component and redux, it turns that component into a container (smart component).

- action creator: An action creator is a function that returns an action (object). Event triggered (ex: click on button, select item from drop down, hovoring on a particular element) by a user either directly or indirectly. indirect event like Ajax request finishing loading up or a page initially loading up. Action creator returns a action (object with key: type) to reducer and set up switch statement inside reducer. Switch statement return different results depends on different type. An action creator returns a object with a type property that describes the type of action.

#### Steps on implement Redux

- reducer: Create and export reducer_books.js, import into reducer/index.js's rootReducer with combineReducers. 

- container: Decide a component that cares about a particular piece of state then promote it to be a container. Then, make use of the react redux library and hookit up to redux.

- book-list (promited to container) - Implement mapStateToProps(glue between react and redux) allows states available as props inside book-list. (if state ever changes, this container will instantly re-render)

- action creator: create action creator function and import it into container.

- container: import action creator and bindActionCreators from redux.

- reducer: Create and export reducer_active_book.js 

