import { combineReducers } from "redux"
import { initalstate } from "../state"




const signupreducer = (state = initalstate.users, action) => {

    switch (action.type) {
        case 'signup':
            let temp = state
            temp.push(action.user)
            console.log(initalstate);
            return (
                temp
            )
        default:
            return state

    }
}


const reducers = combineReducers({
    newusers: signupreducer
})

export default reducers