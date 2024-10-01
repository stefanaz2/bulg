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
  padding-left: 1rem;
  align-items: flex-end;
}

@media only screen and (max-width: 1400px) {
  img {
    border-radius: 5%;
    min-width: 200px;
    width: 100% !important;
    max-height: 300px;
    height: auto;
  }
}
img {
  border-radius: 5%;
  min-width: 200px;
  width: auto;
  max-height: 300px;
  height: auto;
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
