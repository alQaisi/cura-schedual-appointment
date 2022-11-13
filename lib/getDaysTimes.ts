import { Schedule } from "../context/doctors.context";
import { calculateTime,CalculatedTimesResult } from "./calculateTime";
import { checkHour } from "./checkHour";

type getDaysTimesReturnedData={
    day:string
    date:string
    availableHours:CalculatedTimesResult[]
    unavailableHours:CalculatedTimesResult[]
}

export function getDaysTimes(schedule:Schedule):getDaysTimesReturnedData{
    const { availability:{day,date},available,unavailable }=schedule;
    const availableHours=available.map(item=>calculateTime(item,"available"));
    const currentDate=new Date();
    const currentDay=`${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`;
    availableHours.forEach((item,index)=>{
        availableHours[index].times=availableHours[index].times.filter(hour=>currentDay==date?checkHour(hour):true)
    });
    const unavailableHours=unavailable.map(item=>calculateTime(item,"unavailable"));
    unavailableHours.forEach((item,index)=>{
        unavailableHours[index].times=unavailableHours[index].times.filter(hour=>currentDay==date?true:checkHour(hour))
    });
    return {
        day,
        date,
        availableHours,
        unavailableHours
    }
}