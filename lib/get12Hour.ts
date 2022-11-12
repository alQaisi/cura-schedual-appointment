export function get12Hour(hour:number):string{
    const check=hour%12;
    if(check===0)
        return hour===24?"12:00 am":"12:00 pm";
    if(check===hour)
        return `${check}:00 am`;
    return `${check}:00 pm`;
}