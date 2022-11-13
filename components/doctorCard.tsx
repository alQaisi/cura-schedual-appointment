import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import styles from "./container.module.css";
import ScheduleComponent from "./ScheduleComponent";
 
type Hours={
    startHour: number;
    times: string[];
    status: "available" | "unavailable";
}

export type Schedule = {
    day: string;
    date: string;
    availableHours: Hours[];
    unavailableHours: Hours[];
}

type DoctorProps={
    info:{
        about:string
        name:{firstname:string,lastname:string,title:string}
        specialty:string
    }
    rating:{score:string}
    schedule:Schedule[]
}

function DoctorCard({info,rating,schedule}:DoctorProps) {
    return (
        <div className={styles.card}>
            <div className={styles.doctorWrapper}>
                <Image className={styles.img} src="/doctor-character-background_1270-84.webp" width={125} height={125} alt={info.name.firstname+" "+info.name.lastname}/>
                <div className={styles.info}>
                    <h2 className={styles.nameContainer}><span className={styles.title}>{info.name.title}</span><span className={styles.name}>{info.name.firstname+" "+info.name.lastname}</span></h2>
                    <div className={styles.rating}>
                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                    </div>
                    <h4 className={styles.specialty}>{info.specialty}</h4>
                    <p className={styles.about}>{info.about}</p>
                </div>
            </div>
            <ScheduleComponent schedule={schedule}/>
        </div>
    );
}

export default DoctorCard;