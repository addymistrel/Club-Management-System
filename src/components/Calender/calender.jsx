import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Page, Eventcalendar, getJson, Toast } from '@mobiscroll/react';
import "https://code.iconify.design/1/1.0.4/iconify.min.js";
import "./calender.css"
import { useContext } from "react";
import { themeContext } from "../../Context";
import { useEffect } from 'react';
const Calendar = () => {
    
    const [myEvents, setEvents] = React.useState([]);
    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastText, setToastText] = React.useState();
    const [tthheme,setTthheme] = React.useState("light");


    useEffect(() => {
        if(darkMode===true)
        {
            setTthheme("light");
        }
        else{
            setTthheme("dark");
        }
    },[darkMode])


    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const closeToast = React.useCallback(() => {
        setToastOpen(false);
    }, []); 
    
    const onEventClick = React.useCallback((event) => {
        setToastText(event.event.title);
        setToastOpen(true);
    }, []);
    
    const view = React.useMemo(() => {
        return {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        };
        
    }, []);

    return <Page>
        
        <Eventcalendar
            theme="ios" 
            themeVariant={tthheme}
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
        <Toast 
    		message={toastText}
    		isOpen={isToastOpen}
            onClose={closeToast}
    	/>
    </Page>
}

export default Calendar;