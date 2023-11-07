import { months } from "../../globalVars/months";
import { getHHMM } from "./getHHMM";

/**
 * used to return the JS time formatted to be displayed on the UI
 */
export const formatTime= (inputJsTime) => {
    //format the time in a Date contructor in case the epoch time is passed in
    const date = new Date(inputJsTime);

    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' @ ' + getHHMM(date) 
}