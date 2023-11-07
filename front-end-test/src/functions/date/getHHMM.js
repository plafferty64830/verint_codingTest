/**
 * returns the 24 hours time in HH:MM format with leading 0 if the hours or minutes are less than 10
 */
export const getHHMM = (dt) => {
    
    const date = new Date(dt)

    let hours = ''
    if(date.getHours() < 10){
        hours = '0' + date.getHours()
    } else {
        hours = date.getHours()
    }

    let mins = ''
    if(date.getMinutes() < 10){
        mins = '0' + date.getMinutes()
    } else {
        mins = date.getMinutes()
    }

    return hours + ':' + mins
}