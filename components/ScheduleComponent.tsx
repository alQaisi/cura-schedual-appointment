import styles from "./container.module.css";
import { Schedule } from "./doctorCard";
import Day from "./day";
import { useState,Children } from "react";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

function ScheduleComponent({schedule}:{schedule:Schedule[]}){
    const [showedTimes,setShowedTimes]=useState(4);
    const [daysCount,setDaysCount]=useState(3);
    const [currentIndex,setCurrentIndex]=useState(0)

    function handleClick(){
        if(showedTimes===10)
            return setShowedTimes(4);
        setShowedTimes(10);
    }

    function handleIconClick(direction:"next"|"previous"){
        return function(){
            if(direction==="next"){
                if(currentIndex<schedule.length-daysCount-1){
                console.log(currentIndex,schedule.length-1);
                return setCurrentIndex(currentIndex+3);
                }
            }
            else if(currentIndex)
                return setCurrentIndex(currentIndex-3);
        }
    }
    console.log(schedule);
    return (
        <div className={styles.scheduleContainer}>
            <BsFillArrowRightCircleFill onClick={handleIconClick("previous")} className={styles.icon}/>
            { Children.toArray(schedule.slice(0,schedule.length).slice(currentIndex,daysCount+currentIndex).map(day=><motion.div key={day.date} variants={variants} initial="hidden" animate="enter" exit="exit" transition={{type:"linear"}}><Day firstDay={day.date===schedule[0].date} {...day} handleClick={handleClick} showedTimes={showedTimes}/></motion.div>)) }
            <BsFillArrowLeftCircleFill onClick={handleIconClick("next")} className={styles.icon}/>
        </div>
    );
}

export default ScheduleComponent;