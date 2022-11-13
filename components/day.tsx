import styles from "./container.module.css";
import { Children } from "react";

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
    showedTimes:number,
    handleClick():void
    firstDay:boolean
}

function Day({day,date,availableHours,unavailableHours,showedTimes,handleClick,firstDay}:DayProps) {
    const HoursUnAvailable=unavailableHours.map(hour=>hour.times[0]);
    const hoursTotal=availableHours[0].times.length+availableHours[1].times.length;
    const TimesElements=Children.toArray(availableHours.map(item=>{
        return item.times.map(time=>{
            if(HoursUnAvailable.includes(time))
                return <span className={styles.time+" "+styles.unavailable}>{time}</span>
            return <span className={styles.time}>{time}</span>
        })
    }));
    return (
        <>{ hoursTotal?
        <div key={Math.random()*55247} className={styles.dayContainer}>
            {
                hoursTotal &&
                <>
                    <span className={styles.day+" "+(firstDay?styles.today:"")}>{firstDay?"Today":(day.slice(0,3)+" "+date.slice(0,2)+"/"+date.slice(3,5))}</span>
                    <div className={styles.timesContainer}>
                        {TimesElements.slice(0,showedTimes)}
                    </div>
                </>
            }
            {!hoursTotal && hoursTotal>4 && TimesElements.length>4
            ?<button onClick={handleClick} className={styles.book+" "+(firstDay?styles.todayButton:"")}>{showedTimes<5?"More":"Less"}</button>
            :<button className={styles.book+" "+(firstDay?styles.todayButton:"")}>Book</button>
            }
            <button className={styles.book+" "+styles.todayButton+" "+styles.more+" "+styles.moreMain}>More</button>
        </div>
        :<button className={styles.book+" "+styles.todayButton+" "+styles.more}>More</button>
        }</>
    );
}

export default Day;