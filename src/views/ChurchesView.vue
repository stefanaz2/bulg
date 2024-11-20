<script>
export default {
  data() {
    return {
      churches: ['Church 1', 'Church 2', 'Church 3', 'Church 4', 'Church 5']
    }
  }
}
</script>

<template>
  <v-container>
    <v-card
      style="margin: 1rem"
      v-for="(church, index) in churches"
      :key="index"
      :title="church"
      :to="`/churches/${index + 1}`"
      :text="`Church ${index + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`"
    >
    </v-card>
  </v-container>
</template>
