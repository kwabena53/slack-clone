import {
    GET_RECENT_CONVOS,
    GET_USERS,
    GET_USER,
     GET_CONVERSATION,
     GET_CHANNELS
    } from "./types"



const INITIAL_STATE = {
    authUser:{
        id: 'bevans',
        name: 'Bright Evans',
        url: 'https://randomuser.me/api/portraits/men/33.jpg',
        email: 'bevans@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
}
}


export const reducer = (state = INITIAL_STATE, action = { type: "" })=>{

    const {type} = action

    switch (type) {
        case GET_CHANNELS:
            return {
                ...state,
                channels: action.data
            }
        case GET_RECENT_CONVOS:
            return {
                ...state,
                recent: action.data
            }
        case GET_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state;
    }

}