export function selectBook(book) {
  // Testing
  // console.log('A book has been selected: ', book.title);

  // SelectBook is an ActionCreator, it needs to return an action, 
  // an object with a type property and sometimes contains payload.
  // type is alway Uppercase.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
