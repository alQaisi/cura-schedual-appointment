import { useState,useEffect } from "react";
import { Doctor } from "../context/doctors.context";

export function useDoctors(doctorsCount:number):Doctor[] | []{
    const [doctors,setDoctors]=useState<Doctor[] | []>([]);
    useEffect(()=>{
        async function getDoctors(){
            try{
                const result:Response=await fetch("https://cura-front-end-test.herokuapp.com/");
                const data=await result.json();
                const doctor=await JSON.parse(data);
                setDoctors([...doctors,doctor]);
            }catch(err){
                console.log(err);
            }
        }
        if(doctors.length<doctorsCount)
            getDoctors();
    },[doctorsCount,doctors]);
    return doctorsCount==doctors.length?doctors:[];
}