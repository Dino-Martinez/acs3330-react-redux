import { ADD_PASSWORD, EDIT_PASSWORD, DELETE_PASSWORD } from "../actions"

const passwordReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_PASSWORD:
            const {name, password} = action.payload
            return [...state, {name, password}]
        case EDIT_PASSWORD:
            const {index} = action.payload
            return state.map((item, i) => {
                if (i !== index) return item 
                return {...item, ...action.payload}
            })
        case DELETE_PASSWORD:
            const i = action.payload.index
            return [...state.slice(0, i), ...state.slice(i + 1)]
        default:
            return state
    }
}

export default passwordReducer