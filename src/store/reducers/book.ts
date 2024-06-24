import { createStore } from "redux"
interface List{
    nameBook:string,
    namePeople:string,
    dateIn:string,
    dateOut:string
} 
const initialState:List[] = []
const bookReduecer = createStore((state=initialState, action:any)=>{
    switch (action.type) {
        case "add":
            return state
        case "edit":
            return state
        case "delete":
            return state
        default:
            return state        
    }
}   
)
export default bookReduecer
