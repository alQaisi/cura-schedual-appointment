import { Hour } from "./get12Hour";

function hour12To24(hour:Hour):Number{
    let newHour=Number(hour.slice(0,2));
    if(newHour!==newHour)
        newHour=Number(hour.slice(0,1));
    if(hour.includes("am"))
        return newHour;
    newHour+=12
    return newHour%24;;

}

export function checkHour(hour:Hour):boolean{
    let currentHour=new Date().getHours();
    let hourToCheck=hour12To24(hour);
    if(currentHour>=hourToCheck)
        return false;
    return true;
}