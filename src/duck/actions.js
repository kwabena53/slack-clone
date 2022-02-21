import { addConvo, getChannels, getConvo, getConvos, getRecentUsers, getUsers } from "../utils/_DATA"
import {

GET_RECENT_CONVOS,
GET_USERS,
GET_USER,
 GET_CONVERSATION,
 ADD_CONVO,
 GET_CHANNELS,
 GET_CONVERSATIONS
} from "./types"




export const getInitialData = ()=>{
    return async (dispatch)=>{
        try {
           return Promise.all([
               getRecentUsers(),
               getUsers(),
               getChannels(),
               getConvos(),
               
           ]).then(([
               users,
               allUsers,
               channels,
               convos,
           ]) =>{
               return(
                dispatch(_getRecentUsers(users)),
                dispatch(_getUsers(allUsers)),
                dispatch(_getChannels(channels)),
                dispatch(_getConversations(convos))
               ) 
           })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getConversation = (user)=>{
    return async (dispatch)=>{
         return getConvo(user).then((data)=>{
             data = {
                 [user]:{
                     ...data
                 }
             }
          dispatch(_getConvo(data))
        })
    }
}

export const _getConversations = (data)=>{
    return {
        type: GET_CONVERSATIONS,
        data
    }
}

export const _getConvo=(data)=>{
    return {
        type: GET_CONVERSATION,
        data
       }
}

export const _addConvo = (type, name, msg)=>{
    return async(dispatch)=>{
        try {
            const data = await addConvo(type, name, msg)
            console.log("msg: ",data)
            dispatch(addConversations(data))
        } catch (error) {
            console.log(error)
        }

    }
}

export const addConversations = (data)=>{
    return{
        type: ADD_CONVO,
        data
    }
}

export const _getUsers = (data)=>{
    return{
        type: GET_USERS,
        data: data
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