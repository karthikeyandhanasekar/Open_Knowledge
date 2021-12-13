import { combineReducers } from "redux"
import { initalstate } from "../state"


const signupreducer = (state = initalstate.users, action) => {

    switch (action.type) {
        case 'signup':
            let temp = state
            temp.push(action.user)
            return temp
        case 'logged':
            {
                let temp = state
                temp.forEach(ele => {
                    if (ele.email === action.user)
                        ele.haslogged = true
                })
                return temp
            }
        default:
            return state
    }
}


const reducers = combineReducers({
    newusers: signupreducer
})

export default reducers