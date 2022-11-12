import { useState,useContext,useEffect,createContext } from "react";
import { useDoctors } from "../hooks/useDoctors";

export type AvailabilityTimes={
    form_unix:number
    to_unix:number
}

export type Availability={
    label:string
    month:string
    year:string
    day:string
    date:"string"
}

export type Schedule={
    availability:Availability
    available:AvailabilityTimes[]
    unavailable:AvailabilityTimes[]
}

export type Doctor={
    info:{
        about:string
        name:{firstname:string,lastname:string,title:string}
        specialty:string
    }
    rating:{score:string}
    schedule:Schedule[]
}

type DoctorsContextType={
    doctors:Doctor[] | []
    setDoctors:React.Dispatch<React.SetStateAction<Doctor[] | []>>
}

const DoctorsContext=createContext({} as DoctorsContextType);

function DoctorsProvider({children}:{children:JSX.Element}) {
    const doctorsData=useDoctors(5);
    const [doctors,setDoctors]=useState<Doctor[] | []>([]);

    useEffect(()=>{
        if(doctorsData.length===5)
            setDoctors(doctorsData);
    },[doctorsData]);

    const value={doctors,setDoctors};
    return (
        <DoctorsContext.Provider value={value}>{children}</DoctorsContext.Provider>
    );
}

export default DoctorsProvider;

export function useDoctorsContext(){
    const {doctors,setDoctors}=useContext(DoctorsContext);
    return { doctors,setDoctors };
}