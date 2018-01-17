// State argment is not application state, 
// only the state this reducer is responsible for.

export default function (state = null, action) {
  // when app first boot up, there will be no book selected, but react doesn't allow 
  // us to return undefined, so we initially set it to null.

  // if action is BOOK_SELECTED then return action payload else return state.
  
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}