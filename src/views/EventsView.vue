<script>
export default {
  data() {
    return {
      events: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5']
    }
  }
}
</script>

<template>
  <v-card
    style="margin: 1rem"
    v-for="(event, index) in events"
    :key="index"
    :title="event"
    :to="`/events/${index + 1}`"
    :text="`event ${index + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`"
  >
  </v-card>
</template>
