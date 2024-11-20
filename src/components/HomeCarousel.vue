<script>
import CarouselEvent from '@/components/CarouselEvent.vue'

export default {
  components: {
    CarouselEvent
  },
  data() {
    return {
      items: [
        {
          src: '/images/picnic1.jpeg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec rutrum urna. Duis lacus ante, hendrerit et lacus non, eleifend imperdiet ex. Aenean sollicitudin sed massa ornare pulvinar. Sed sagittis, augue at semper auctor, dolor erat lacinia tellus, nec facilisis leo sem sit amet mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus ornare mauris in dui auctor interdum. Donec ullamcorper, lorem vel scelerisque cursus, ligula ex eleifend tortor, et pulvinar diam erat ultrices eros. Quisque tincidunt consectetur nibh, interdum faucibus augue porttitor eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec tellus vulputate, imperdiet erat luctus, porta sapien. Proin tempus, est at cursus consequat, nunc tellus efficitur augue, et mattis diam ex a neque. Pellentesque vestibulum at nulla nec commodo. In at feugiat turpis. Maecenas varius lectus id metus bibendum maximus.',
          title: 'Lorem ipsum'
        },
        {
          src: '/images/picnic2.jpeg',
          description:
            'Sed eu ex lacus. In eleifend aliquet egestas. Nulla ut dapibus urna. Pellentesque turpis sem, ultricies et leo in, suscipit euismod enim. Nunc efficitur consequat lectus, id fermentum ex imperdiet a. Vestibulum nibh ex, molestie non efficitur quis, sagittis non mi. In sodales vulputate lectus eu ullamcorper. Donec nec tortor dui. Nulla id turpis neque. Pellentesque tempor mauris odio, ac luctus neque elementum sit amet.',
          title: 'Sed eu'
        },
        {
          src: '/images/picnic3.jpeg',
          description:
            'Donec vel neque sed est feugiat finibus vel eu erat. Cras faucibus efficitur mauris sed ultricies. Donec a dui tellus. Aliquam in euismod lectus. Curabitur rutrum, lacus sit amet mollis fringilla, risus mi ullamcorper nisi, vitae consequat nisl diam nec metus. Etiam scelerisque arcu vulputate, varius eros non, volutpat diam. Nunc porta laoreet elit, eu vehicula lacus dapibus et. Morbi tristique eros orci, ac tincidunt quam vulputate sit amet. Phasellus in placerat ante. Cras nec massa nulla. Quisque non urna aliquam, congue dui sed, laoreet justo. Morbi fermentum venenatis purus, dignissim facilisis magna. Nullam id quam maximus, faucibus risus vitae, aliquet purus. Nullam neque sapien, ultrices eu diam non, egestas cursus augue. Maecenas molestie metus eget nisi cursus, quis iaculis sapien blandit. Proin sagittis purus in urna aliquam ornare.',
          title: 'Donec vel'
        }
      ]
    }
  }
}
</script>

<template>
  <v-carousel show-arrows="hover" hide-delimiters>
    <v-carousel-item style="align-self: center" v-for="(item, i) in items" :key="i">
      <CarouselEvent :event="item" />
    </v-carousel-item>
  </v-carousel>
</template>
