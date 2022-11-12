import { useDoctorsContext } from '../context/doctors.context'
import { getDaysTimes } from '../lib/getDaysTimes';
import DoctorCard from './doctorCard';
import styles from "./container.module.css";
import { Children } from "react";

function Container() {
    const { doctors }=useDoctorsContext();
    const doctorsData=doctors.length==5?doctors.map(doctor=>{
        const schedule=doctor.schedule.map(day=>getDaysTimes(day));
        return {...doctor,schedule};
    }):[];
    return (
        <div className={styles.container}>
            {
                Children.toArray(doctorsData.map(doctorData=><DoctorCard {...doctorData}/>))
            }
        </div>
    );
}

export default Container;