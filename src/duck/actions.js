import { getChannels, getRecentUsers } from "../utils/_DATA"
import {

GET_RECENT_CONVOS,
GET_USERS,
GET_USER,
 GET_CONVERSATION,
 GET_CHANNELS
} from "./types"




export const getInitialData = ()=>{
    return async (dispatch)=>{
        try {
           return Promise.all([
               getRecentUsers(),
               getChannels(),
           ]).then(([
               users,
               channels
           ]) =>{
               return(
                dispatch(_getRecentUsers(users)),
                dispatch(_getChannels(channels))
               ) 
           })
        } catch (error) {
            console.log(error)
        }
    }
}

export const _getRecentUsers = (data)=>{
    return {
        type: GET_RECENT_CONVOS,
        data: data
    }
}

export const _getChannels = (data)=>{
    return {
        type: GET_CHANNELS,
        data: data
    }
}