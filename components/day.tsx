import styles from "./container.module.css";
import { Children, useState } from "react";

type AvailableHours={
    startHour:number
    times:string[]
    status:"available" | "unavailable"
}

type DayProps={
    day:string,
    date:string,
    availableHours:AvailableHours[],
    unavailableHours:AvailableHours[],
}

function Day({day,date,availableHours,unavailableHours}:DayProps) {
    const [showedTimes,setShowedTimes]=useState(6);
    const HoursUnAvailable=unavailableHours.map(hour=>hour.times[0]);
    const TimesElements=Children.toArray((availableHours.slice(0,showedTimes)).map(item=>{
        return item.times.map(time=>{
            if(HoursUnAvailable.includes(time))
                return <span className={styles.time+" "+styles.unavailable}>{time}</span>
            return <span className={styles.time}>{time}</span>
        })
    }));
    return (
        <div key={Math.random()*55247} className={styles.dayContainer}>
            <span className={styles.day}>{day.slice(0,3)+" "+date.slice(0,2)+"/"+date.slice(3,5)}</span>
            <div className={styles.timesContainer}>
                {TimesElements}
            </div>
            <button className={styles.book}>Book</button>
        </div>
    );
}

export default Day;