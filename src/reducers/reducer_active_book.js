// state argument is not application state, only the
// state this reducer is responsible for
// es6 syntax to default state to null (when application starts up this is undefined)
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  return state;
}