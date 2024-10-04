<template>
  <v-row>
    <v-col class="text">
      <h2>{{ event.title }}</h2>
      <p>&emsp;{{ event.description }}</p>
    </v-col>
    <v-col>
      <img :src="event.src" />
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({ event: Object })
</script>

<style scoped>
.text {
  float: right;
  align-self: center;
  padding-left: 5rem;
  flex-grow: 0.75;
}

@media only screen and (max-width: 1400px) {
  img {
    min-width: 200px;
    width: 100% !important;
    max-height: 300px;
    height: auto;
    border-radius: 10%;
  }
}
img {
  padding: 1rem;
  min-width: 200px;
  width: 100%;
  max-height: 300px;
  height: auto;
  border-radius: 10%;
}

p {
  padding-top: 1rem;

  -webkit-line-clamp: 4;
  line-clamp: 4;
  overflow: hidden;
  display: -webkit-box;
  /* max-width: 400px; */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
h2 {
  white-space: nowrap;
}
</style>
