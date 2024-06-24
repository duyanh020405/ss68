
import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from '../src/store/actions/bookActions'
interface List{
    nameBook:string,
    namePeople:string,
    dateIn:string,
    dateOut:string
} 

const initialState: List[] = [];

const bookReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, action.payload];
        case EDIT_BOOK:
            return state.map((book, index) =>
                index === action.payload.index ? action.payload.updatedBook : book
            );
        case DELETE_BOOK:
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};

export default bookReducer;
