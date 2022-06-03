import React , {useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import { Calendar, momentLocalizer  } from "react-big-calendar";
import BigCalendar from "react-big-calendar";

import moment from "moment";


import "react-big-calendar/lib/css/react-big-calendar.css";

const cult = moment.locale('fr')

// moment.locale('pt-br');
// require('globalize/lib/cultures/globalize.culture.ar-AE')

moment.locale('fr');

// const localizer = momentLocalizer(moment); 
const localizer = momentLocalizer(moment); 

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

// Generate Order Data
function createData(start, end, title) {
    return { start, end, title };
  }

const events1 = [
    createData(moment().toDate(), moment().add(1, "hour").toDate(), "Priscila - Progressiva")
  ];

   

export default function CalendarCustom() {
  const classes = useStyles();

  const [events, setEvents] = useState(events1);
  
  

  
  return (
    <React.Fragment>
      <Title>Agendamentos</Title>
     
      <div className="App">
        <Calendar
          selectable
          localizer={localizer}
        //   culture={cult}
        //   rtl={'pt-br'}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
        />
      </div>
    
    </React.Fragment>
  );
}