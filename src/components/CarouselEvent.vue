<template>
  <v-row class="hero">
    <v-col class="text">
      <h2>{{ event.title }}</h2>
      <p>&emsp;{{ event.description }}</p>
    </v-col>
    <v-col style="align-self: center">
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
}

@media only screen and (max-width: 400px) {
  img {
    min-width: 200px !important;
  }
}

@media only screen and (max-width: 1400px) {
  img {
    min-width: 250px;
    width: 100% !important;
    height: auto !important;
    border-radius: 10%;
    align-self: center;
  }
}
img {
  padding: 0;
  width: 100%;
  height: auto;
  border-radius: 10%;
  max-height:465px;
}

.hero{
  height: 100%;
  padding: 2rem;
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
