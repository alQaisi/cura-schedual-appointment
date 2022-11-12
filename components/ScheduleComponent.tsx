import styles from "./container.module.css";
import { Schedule } from "./doctorCard";
import Day from "./day";
import { useState,useEffect,Children } from "react";
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs"
import { AnimatePresence,motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

function ScheduleComponent({schedule}:{schedule:Schedule[]}){
    const [daysCount,setDaysCount]=useState(3);
    const [currentIndex,setCurrentIndex]=useState(0)

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
    return (
        <div className={styles.scheduleContainer}>
            <BsFillArrowRightCircleFill onClick={handleIconClick("previous")} className={styles.icon}/>
            { Children.toArray(schedule.slice(1).slice(currentIndex,daysCount+currentIndex).map(day=><motion.div key={day.date} variants={variants} initial="hidden" animate="enter" exit="exit" transition={{type:"linear"}}><Day {...day}/></motion.div>)) }
            <BsFillArrowLeftCircleFill onClick={handleIconClick("next")} className={styles.icon}/>
        </div>
    );
}

export default ScheduleComponent;