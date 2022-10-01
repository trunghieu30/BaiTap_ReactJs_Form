const stateDefault = {
    mangSV: [

    ],
    selectedUser: null
}

export const BTForm = (state = stateDefault, { type, payload }) => {
    switch (type) {
        case 'ADD_USER': {
            const data = [...state.mangSV]
            const user = { ...payload, id: Date.now() }
            data.push(user)
            return { ...state, mangSV: data }
        }
        case 'DELETE_USER': {
            const data = state.mangSV.filter(item => item.id !== payload)
            return { ...state, mangSV: data }
        }
        case 'EDIT_USER': {
            const user = state.mangSV.find(item => item.id === payload)
            return { ...state, selectedUser: user }
        }
        case 'UPDATE_USER': {
            const newUserList = state.mangSV.map((item) => item.id === payload.id ? payload : item)

            state.selectedUser = null
            return { ...state, mangSV: newUserList }
        }

        default: return state
    }
}