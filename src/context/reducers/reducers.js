import { INC, DEC, RES } from "../action"

const initialState = 9

export const counter = (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return state += action.payload
        case DEC:
            return state -= 1
        case RES:
            return state = 0
        default:
            return state
    }
}
