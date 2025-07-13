import React from "react";
import DatePicker from "react-datepicker";
import {DiaryDateCalendarContainer} from "./DiaryDateСalendar.styled"
import {ReactComponent as CalendarLogo} from "../../images/calendar.svg";
import "react-datepicker/dist/react-datepicker.css";

const DiaryDateCalendar = ({selectDate, elemDate}) => {
    return (
        <DiaryDateCalendarContainer>
            <>
                <DatePicker
                    className="datePicker"
                    selected={elemDate}
                    dateFormat="dd.MM.yyyy"
                    onChange={(date) => selectDate(date)}
                />
                <CalendarLogo className="datePickerLogo"/>
            </>
        </DiaryDateCalendarContainer>
    );
};

export default DiaryDateCalendar;
