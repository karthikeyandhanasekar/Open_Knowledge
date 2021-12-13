


export const adduser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "signup",
            user: data
        })
    }
}

export const updatelogstatus = (data) => {
    return (dispatch) => {
        dispatch({
            type: "logged",
            user: data
        })
    }
}


