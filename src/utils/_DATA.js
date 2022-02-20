
const authUser={
        id: 'bevans',
        name: 'Bright Evans',
        url: 'https://randomuser.me/api/portraits/men/33.jpg',
        email: 'bevans@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
}

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
        email: 'jbsarfo@asu.edu',
        workspaces:['EdPlus at ASU', 'ASU Community'],
        active: true
    },

}
// "2021-08-29T11:11:05.000000Z"

const conversations = {
    "bsmall":{
        "2022-02-19":{
            "bsmall":{
                "created_at" : "2022-02-19T11:11:05.000000Z",
                "message": "Hey! are you in the office?"
            },
            "bevans":{
                "created_at" : "2022-02-19T11:18:05.000000Z",
                "message": "Yes. About to leave soon?"
            },
            "bevans":{
                "created_at" : "2022-02-19T11:21:05.000000Z",
                "message": "Can I help you in any way?"
            },
            "bsmall":{
                "created_at" : "2022-02-19T11:23:05.000000Z",
                "message": "Let's talk tomorrow then?"
            },
        }
    },
    "jbsarfo":{
        "2022-02-12":{
            "jbsarfo":{
                "created_at" : "2022-02-12T11:11:05.000000Z",
                "message": "Nice presentation, Bright"
            },
            "bevans":{
                "created_at" : "2022-02-12T11:18:05.000000Z",
                "message": "Thanks Jenn!"
            }
        },
        "2022-02-15":{
            "jbsarfo":{
                "created_at" : "2022-02-15T11:11:05.000000Z",
                "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
            },
            "bevans":{
                "created_at" : "2022-02-15T11:18:05.000000Z",
                "message": "Hey Jenn, sure! Which kind of help?"
            },
            "jbsarfo":{
                "created_at" : "2022-02-19T11:21:05.000000Z",
                "message": "Yeah. How to be confident."
            },
            "bsmbevansall":{
                "created_at" : "2022-02-19T11:23:05.000000Z",
                "message": "I gotcha!"
            },
        }
    },
}


const channels = {
    "Announcements":{
        "2022-02-15":{
            "jbsarfo":{
                "created_at" : "2022-02-15T11:11:05.000000Z",
                "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
            },
            "bevans":{
                "created_at" : "2022-02-15T11:18:05.000000Z",
                "message": "Hey Jenn, sure! Which kind of help?"
            },
            "jbsarfo":{
                "created_at" : "2022-02-19T11:21:05.000000Z",
                "message": "Yeah. How to be confident."
            },
            "bsmbevansall":{
                "created_at" : "2022-02-19T11:23:05.000000Z",
                "message": "I gotcha!"
            },
        },
        "2022-02-16":{
            "jbsarfo":{
                "created_at" : "2022-02-15T11:11:05.000000Z",
                "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
            },
        }
    },
    "new-hires":{
        "2022-02-15":{
            "jbsarfo":{
                "created_at" : "2022-02-15T11:11:05.000000Z",
                "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
            },
            "bevans":{
                "created_at" : "2022-02-15T11:18:05.000000Z",
                "message": "Hey Jenn, sure! Which kind of help?"
            },
            "jbsarfo":{
                "created_at" : "2022-02-19T11:21:05.000000Z",
                "message": "Yeah. How to be confident."
            },
            "bsmbevansall":{
                "created_at" : "2022-02-19T11:23:05.000000Z",
                "message": "I gotcha!"
            },
        },
        "2022-02-16":{
            "jbsarfo":{
                "created_at" : "2022-02-15T11:11:05.000000Z",
                "message": "Hey, Bright. I have an upcoming presesentation I want you to help me out"
            },
        }
    }
}


export const getUsers = ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(...users), 1000)
    })
}

export const getConvo = (user)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(conversations[user]), 1000)
    })
}

export const getUser= (user)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(users[user]), 1000)
    })
}

export const getChannels= ()=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(...channels), 1000)
    })
}

export const getChannel= (channel)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>res(channels[channel]), 1000)
    })
}

export const addConvo = (user, date, time, msg)=>{
    return new Promise((res, rej)=>{

        conversations = {
            ...conversations,
            [user]:{
                ...conversations.user,
                [date]:{
                    ...conversations.user.date,
                    [authUser.id]:{
                        "created_at" : time,
                        "message": msg
                    },
                }
            }
        }
        res()
    })
}
