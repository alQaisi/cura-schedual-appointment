import { Schedule } from "../context/doctors.context";
import { calculateTime,CalculatedTimesResult } from "./calculateTime";

type getDaysTimesReturnedData={
    day:string
    date:string
    availableHours:CalculatedTimesResult[]
    unavailableHours:CalculatedTimesResult[]
}

export function getDaysTimes(schedule:Schedule):getDaysTimesReturnedData{
    const { availability:{day,date},available,unavailable }=schedule;
    const availableHours=available.map(item=>calculateTime(item,"available"));
    const unavailableHours=unavailable.map(item=>calculateTime(item,"unavailable"));
    return {
        day,
        date,
        availableHours,
        unavailableHours
    }
}