<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        // aspectRatio: 1,
        height: 'auto',
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2024-09-30' },
          { title: 'event 2', date: '2024-09-02' }
        ]
      }
    }
  },
  methods: {
    handleDateClick: function (arg) {
      alert('date click! ' + arg.dateStr)
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
<style>

.fc{
  white-space: nowrap;
}

.fc .fc-toolbar{
  justify-content: center;
  padding:1rem;
  flex-wrap:wrap;
  gap:2rem;
}

.fc .fc-toolbar-title{
  white-space: nowrap;
}

.fc .fc-button .fc-icon {
  font-size: inherit !important;
  vertical-align: revert !important;
}
</style>
