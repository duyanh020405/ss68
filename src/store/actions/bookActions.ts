
export const ADD_BOOK = 'add';
export const EDIT_BOOK = 'edit';
export const DELETE_BOOK = 'delete';

export const addBook = (book: any) => ({
    type: ADD_BOOK,
    payload: book
});

export const editBook = (index: number, updatedBook: any) => ({
    type: EDIT_BOOK,
    payload: { index, updatedBook }
});

export const deleteBook = (index: number) => ({
    type: DELETE_BOOK,
    payload: index
});
