


export const adduser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "signup",
            user: data
        })
    }
}

export const checkuser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "signup",
            user: data
        })
    }
}


