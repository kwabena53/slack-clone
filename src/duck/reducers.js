import {
    GET_RECENT_CONVOS,
    GET_USERS,
    GET_USER,
    GET_CONVERSATIONS,
    ADD_CONVO,
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
        case GET_CONVERSATION:
            return{
                ...state,
                convo:{
                    ...state.convo,
                    ...action.data
                }
            }
            case GET_CONVERSATIONS:
                return{
                    ...state,
                    convo:action.data
                }
        case ADD_CONVO:
            let user = action.data.user
            let mDate = action.data.date
            let myMsg = {
                user: INITIAL_STATE.authUser.id,
                message: action.data.message,
                created_at: action.data.created_at
            }
            return{
                ...state,
                convo:{
                    ...state.convo,
                    [user]:{
                        ...state.convo[user],
                        [mDate]:{
                            ...state.convo[user][mDate],
                            "date": mDate,
                           messages:state?.convo[user][mDate]?.messages ? state?.convo[user][mDate]?.messages.concat(myMsg): [myMsg],
                        }
                    }
           
                }

            }
        default:
            return state;
    }

}
    