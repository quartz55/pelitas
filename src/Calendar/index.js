import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/core";
import "./index.css";

const apiKey = process.env.REACT_APP_API_KEY || process.env.API_KEY;
const calendarId = process.env.REACT_APP_CALENDAR_ID || process.env.CALENDAR_ID;

const styles = {
  eventCircle: {
    color: "#B241D1",
  },
  multiEvent: css`
    background: #b241d1;
    &:hover {
      background: #86319e;
    }
    &:after {
      border-left-color: #b241d1;
    }
    &:hover::after {
      border-left-color: #86319e;
    }
    &:before {
      border-right-color: #b241d1;
    }
    &:hover::before {
      border-right-color: #86319e;
    }
  `,
};

const MyCalendar = () => {
  return (
    <section id="calendar">
      <div className="calendar__wrapper">
        <h2>Availability</h2>
        <Calendar apiKey={apiKey} calendarId={calendarId} styles={styles} />
      </div>
    </section>
  );
};

export default MyCalendar;
