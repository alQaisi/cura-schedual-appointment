import { AvailabilityTimes } from "../context/doctors.context";
import { get12Hour,Hour } from "./get12Hour";

export type CalculatedTimesResult={
    startHour:number
    times:Hour[]
    status:"available" | "unavailable"
}

export function calculateTime(timesArray:AvailabilityTimes,availability:"available" | "unavailable"):CalculatedTimesResult{
    const [startTime,endTime]=Object.values(timesArray);
    const date=new Date(startTime*1000);
    const hour=date.getHours();

    const timeDifference = endTime - startTime;
    const differenceDate = new Date(timeDifference * 1000);
    const diffHours = differenceDate.getUTCHours();

    const times:Hour[]=[];

    for(let i=0;i<diffHours;i++){
        times[i]=get12Hour(hour+i);
    }
    return {startHour:hour,times,status:availability}

}