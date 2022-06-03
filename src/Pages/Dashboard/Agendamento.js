import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

const locales = {
  'ptBR': require('date-fns/locale/pt-BR'),
}


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

  const myEventsList = [{
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2020, 9, 9),
    end: new Date(2020, 9, 9),
  }]

  
  const MyCalendar = props => (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )

class Cultures extends React.Component {
  state = { culture: 'fr' ,
            events: [
                {
                    id: 0,
                    title: 'All Day Event very long title',
                    allDay: true,
                    start: new Date(2015, 3, 0),
                    end: new Date(2015, 3, 1),
                  }
            ]
}

  render() {
    const { localizer } = this.props
    let cultures = ['en', 'en-GB', 'es', 'fr', 'ar-AE']
    let rtl = this.state.culture === 'ar-AE'

    return (
      <React.Fragment>
        
        <MyCalendar/>

      </React.Fragment>
    )
  }
}

export default Cultures