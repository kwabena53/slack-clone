

const users = {
    jbsarfo: {
        id: 'jbsarfo',
        name: 'Jennifer Sarfo',
        url: 'https://randomuser.me/api/portraits/women/81.jpg',
        email: 'jbsarfo@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },
    jrode1: {
        id: 'jrode1',
        name: 'Jane Rode',
        url: 'https://randomuser.me/api/portraits/women/27.jpg',
        email: 'jrode1@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },
    pdaniels: {
        id: 'pdaniels',
        name: 'Prince Daniels',
        url: 'https://randomuser.me/api/portraits/men/11.jpg',
        email: 'pdaniels@asu.edu',
        workspaces:['EdPlus at ASU'],
        active: false
    },
    jLui2: {
        id: 'jLui2',
        name: 'Jessica Lui',
        url: 'https://randomuser.me/api/portraits/women/90.jpg',
        email: 'jLui2@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: false
    },
    ecook: {
        id: 'ecook',
        name: 'Evans Cook',
        url: 'https://randomuser.me/api/portraits/men/51.jpg',
        email: 'ecook@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },
    bevans: {
        id: 'bevans',
        name: 'Bright Evans',
        url: 'https://randomuser.me/api/portraits/men/33.jpg',
        email: 'bevans@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },
    bsmall: {
        id: 'bsmall',
        name: 'Bryan Small',
        url: 'https://randomuser.me/api/portraits/men/21.jpg',
        email: 'bsmall@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },

}
// "2021-08-29T11:11:05.000000Z"

const recentConvos = {
    jbsarfo: {
        id: 'jbsarfo',
        name: 'Jennifer Sarfo',
        url: 'https://randomuser.me/api/portraits/women/81.jpg',
        email: 'jbsarfo@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },
    bsmall: {
        id: 'bsmall',
        name: 'Bryan Small',
        url: 'https://randomuser.me/api/portraits/men/21.jpg',
        email: 'jbsarfo@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },
}

const conversations = {
    "bsmall":{
        "2022-02-17":{
            "date": "2022-02-17",
            "messages": [
                {
                    "user": "bsmall",
                    "created_at" : "2022-02-17T11:11:05.000000Z",
                    "message": "Hey! are you in the office?"
                },
                {
                    "user": "bevans",
                    "created_at" : "2022-02-17T11:18:05.000000Z",
                    "message": "Yes. About to leave soon?"
                },
                {
                    "user": "bevans",
                    "created_at" : "2022-02-17T11:21:05.000000Z",
                    "message": "Can I help you in any way?"
                },
                {
                    "user": "bsmall",
                    "created_at" : "2022-02-17T11:23:05.000000Z",
                    "message": "Let's talk tomorrow then?"
                },
            ]
        },
        "2022-02-18":{
            "date": "2022-02-18",
            "messages": [
                {
                    "user": "bsmall",
                    "created_at" : "2022-02-18T11:11:05.000000Z",
                    "message": "Hey! are you in the office?"
                },
                {
                    "user": "bevans",
                    "created_at" : "2022-02-18T11:18:05.000000Z",
                    "message": "Yes. About to leave soon?"
                },
                {
                    "user": "bevans",
                    "created_at" : "2022-02-18T11:21:05.000000Z",
                    "message": "Can I help you in any way?"
                },
                {
                    "user": "bsmall",
                    "created_at" : "2022-02-18T11:23:05.000000Z",
                    "message": "Let's talk tomorrow then?"
                },
            ]
        },
    },
    "jbsarfo":{
        "2022-02-12":{
            "date": "2022-02-12",
            "messages": [
                {
                    "user": "jbsarfo",
                    "created_at" : "2022-02-12T11:11:05.000000Z",
                    "message": "Nice presentation, Bright"
                },
                {
                    "user": "bevans",
                    "created_at" : "2022-02-12T11:18:05.000000Z",
                    "message": "Thanks Jenn!"
                }
            ]
        },
        "2022-02-15":{
        "date": "2022-02-15",
        "messages": [
            {
                "user": "jbsarfo",
                "created_at" : "2022-02-15T11:11:05.000000Z",
                "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
            },
            {
                "user": "bevans",
                "created_at" : "2022-02-15T11:18:05.000000Z",
                "message": "Hey Jenn, sure! Which kind of help?"
            },
            {
                "user": "jbsarfo",
                "created_at" : "2022-02-19T11:21:05.000000Z",
                "message": "Yeah. How to be confident."
            },
            {
                "user": "bevans",
                "created_at" : "2022-02-19T11:23:05.000000Z",
                "message": "I gotcha!"
            },
        ]
      }
        
    },
}


const channels = {
    "Announcements":{
        "id":"announcements",
        "name": "Announcements",
        "content":{
            "2022-02-12":{
                "date": "2022-02-15",
                "messages": {
                    0:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-12T11:11:05.000000Z",
                        "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
                    },
                    1:{
                        "user": "bevans",
                        "created_at" : "2022-02-12T11:18:05.000000Z",
                        "message": "Hey Jenn, sure! Which kind of help?"
                    },
                    2:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-12T11:21:05.000000Z",
                        "message": "Yeah. How to be confident."
                    },
                    3:{
                        "user": "bevans",
                        "created_at" : "2022-02-12T11:23:05.000000Z",
                        "message": "I gotcha!"
                    },
                }
            },
            "2022-02-15":{
                "date": "2022-02-15",
                "messages": {
                    0:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-15T11:11:05.000000Z",
                        "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
                    },
                    1:{
                        "user": "bevans",
                        "created_at" : "2022-02-15T11:18:05.000000Z",
                        "message": "Hey Jenn, sure! Which kind of help?"
                    },
                    2:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-15T11:21:05.000000Z",
                        "message": "Yeah. How to be confident."
                    },
                    3:{
                        "user": "bevans",
                        "created_at" : "2022-02-15T11:23:05.000000Z",
                        "message": "I gotcha!"
                    },
                }
            },
        }
    },
  
    "new-hires":{
        "id":"new-hires",
        "name": "new-hires",
        "content":{
            "2022-02-12":{
                "date": "2022-02-15",
                "messages": {
                    0:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-12T11:11:05.000000Z",
                        "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
                    },
                    1:{
                        "user": "bevans",
                        "created_at" : "2022-02-12T11:18:05.000000Z",
                        "message": "Hey Jenn, sure! Which kind of help?"
                    },
                    2:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-12T11:21:05.000000Z",
                        "message": "Yeah. How to be confident."
                    },
                    3:{
                        "user": "bevans",
                        "created_at" : "2022-02-12T11:23:05.000000Z",
                        "message": "I gotcha!"
                    },
                }
            },
            "2022-02-15":{
                "date": "2022-02-15",
                "messages": {
                    0:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-15T11:11:05.000000Z",
                        "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
                    },
                    1:{
                        "user": "bevans",
                        "created_at" : "2022-02-15T11:18:05.000000Z",
                        "message": "Hey Jenn, sure! Which kind of help?"
                    },
                    2:{
                        "user": "jbsarfo",
                        "created_at" : "2022-02-15T11:21:05.000000Z",
                        "message": "Yeah. How to be confident."
                    },
                    3:{
                        "user": "bevans",
                        "created_at" : "2022-02-15T11:23:05.000000Z",
                        "message": "I gotcha!"
                    },
                }
            },
        }
       
    }
}


export const getUsers = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(users), 250)
    })
}

export const getConvo = (user)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(conversations[user]), 250)
    })
}

export const getConvos = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(conversations), 250)
    })
}

export const getUser= (user)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(users[user]), 250)
    })
}

export const getChannels= ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(channels), 250)
    })
}

export const getChannel= (channel)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(channels[channel]), 250)
    })
}

export const getRecentUsers = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(recentConvos), 250)
    })
}

export const addConvo = (type, name, msg, )=>{

    let _date = new Date()
    _date= _date.toISOString().split('T')[0]

    let time = new Date().toISOString()


    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(type === "dm"){
               
            }else if(type=== "channel"){
                
            }
            res({
                    "date": _date,
                    "user": name,
                    "created_at" : time,
                    "message": msg
            }) 
        }, 50)
    })
}
