export const INC = "INC"
export const DEC = "DEC"
export const RES = "RES"

export const increment = (payload) => {
    return {
        type: INC,
        payload
    }
}

export const decrement = () => {
    return {
        type: DEC
    }
}
export const reset = () => {
    return {
        type: RES
    }
}