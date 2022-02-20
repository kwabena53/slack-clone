


export const formatDate = (date)=>{
    const mydate = new Date(date)
    return mydate.toDateString()
}

export const formatTime = (time)=>{
    const myDate = new Date(time)
  return myDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}