const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUserData = data => ({
    type: SET_USERS_DATA,
    data
})

export const fetchUsersData = () => (dispatch, getState) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(setUserData(data))) // check if needed
}

const initialState = {
    usersData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData: action.data
            }
        default:
            return state
    }
}