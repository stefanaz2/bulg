<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      currentView: 'dayGridMonth',
      calendarOptions: {
        height: 'auto',
        plugins: [googleCalendarPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        googleCalendarApiKey: 'xxxxxxxxxxxxx',
        events: {
          googleCalendarId: 'xxxxxxxxxxxxxx'
        }
      }
    }
  },
  methods: {
    handleDateClick: function (arg) {
      this.handleEventClick(arg);
    },
    handleEventClick: function (arg) {
      arg.jsEvent.preventDefault();
      const calendarApi = this.$refs.fullCalendar.getApi();
      const eventStart = arg.event != undefined ? arg.event.start : arg.dateStr;
      calendarApi.changeView('timeGridDay', eventStart);
      this.currentView = 'timeGridDay';
    },
    goToMonthView() {
      const calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.changeView('dayGridMonth');
      this.currentView = 'dayGridMonth';
    },
    handleViewChange(arg) { // this is from fullCalendar, to let it know we changed views
      this.currentView = arg.view.type;
    }
  }
}
</script>

<template>
  <button v-if="currentView === 'timeGridDay'" @click="goToMonthView">Back to Month View</button>
  <FullCalendar ref="fullCalendar" :options="calendarOptions">
    <!-- <template v-slot:eventContent='arg'>
        <b>{{ arg.timeText }}</b>
        <i>{{ arg.event.title }}</i>
    </template> -->
  </FullCalendar>
</template>

<style>
.fc {
  white-space: nowrap;
}

.fc .fc-toolbar {
  justify-content: center;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.fc .fc-toolbar-title {
  white-space: nowrap;
}

.fc .fc-button .fc-icon {
  font-size: inherit !important;
  vertical-align: revert !important;
}
</style>
