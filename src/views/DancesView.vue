<script>
export default {
  data() {
    return {
      dances: ['Dance 1', 'Dance 2', 'Dance 3', 'Dance 4', 'Dance 5']
    }
  }
}
</script>

<template>
  <v-card
    style="margin: 1rem"
    v-for="(dance, index) in dances"
    :key="index"
    :title="dance"
    :to="`/dances/${index + 1}`"
    :text="`dance ${index + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`"
  >
  </v-card>
</template>
