<script>
export default {
  data() {
    return {
      theatres: ['Theatre 1', 'Theatre 2', 'Theatre 3', 'Theatre 4', 'Theatre 5']
    }
  }
}
</script>

<template>
  <v-card
    style="margin: 1rem"
    v-for="(theatre, index) in theatres"
    :key="index"
    :title="theatre"
    :to="`/theatres/${index + 1}`"
    :text="`theatre ${index + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`"
  >
  </v-card>
</template>
