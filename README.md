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

- reducer:
- container: A container is a react component that has a direct connection to the state managed by redux. Containers are also sometimes called Smart component from redux docs as opposed to a dumb component. In general we wnat the most parent component that cares abouta particular piece of state to be a container. We only create containers out of components that cares about a particular piece of state. Only the most parent component that uses a particular piece of state needs to be connected to redux.

#### Steps on implement Redux

- reducer: create and export reducer_books.js, import into reducer/index.js's rootReducer with combineReducers. 
- container: Decide a component that cares about a particular piece of state then promote it to be a container. Then, make use of the react redux library and hookit up to redux.

