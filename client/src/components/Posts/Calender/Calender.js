import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import './styles.css';

const CalendarImg=()=>{
    const [calDate, setCalDate] = useState(new Date());
    const onChange=()=>{
       setCalDate(calDate);
    }
    return(
        <div>
            <Calendar className='calender' onChange={onChange} value={calDate}/>
        </div>
    )
}

export default CalendarImg;

