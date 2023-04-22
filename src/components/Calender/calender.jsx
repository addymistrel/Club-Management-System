import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Page, Eventcalendar, getJson, Toast } from '@mobiscroll/react';
import "https://code.iconify.design/1/1.0.4/iconify.min.js";
import "./calender.css"

const Calendar = () => {

    const [myEvents, setEvents] = React.useState([]);
    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastText, setToastText] = React.useState();
    const [tthheme,setTthheme] = React.useState("light");

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

    const handlelight = () =>
    {
        if(tthheme==="light")
            setTthheme("dark");
        else
            setTthheme("light");
    }

    return <Page>
        <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" onChange={handlelight}/>
                <div class="slider round"></div>
            </label>
            <em>Toggle {tthheme==="light"? "dark":"light"} Mode</em>
        </div>
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