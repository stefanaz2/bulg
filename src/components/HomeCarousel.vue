<template>
  <v-carousel height="300px">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '/src/assets/picnic1.jpeg'
        },
        {
          src: '/src/assets/picnic2.jpeg'
        },
        {
          src: '/src/assets/picnic3.jpeg'
        }
      ]
    }
  }
}
</script>
