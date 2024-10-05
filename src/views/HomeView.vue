<script setup lang="ts">
import CalendarComponent from '@/components/CalendarComponent.vue'
import HomeCarousel from '@/components/HomeCarousel.vue'

const items = [
  {
    src: '/src/assets/picnic1.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec rutrum urna. Duis lacus ante, hendrerit et lacus non, eleifend imperdiet ex. Aenean sollicitudin sed massa ornare pulvinar. Sed sagittis, augue at semper auctor, dolor erat lacinia tellus, nec facilisis leo sem sit amet mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus ornare mauris in dui auctor interdum. Donec ullamcorper, lorem vel scelerisque cursus, ligula ex eleifend tortor, et pulvinar diam erat ultrices eros. Quisque tincidunt consectetur nibh, interdum faucibus augue porttitor eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec tellus vulputate, imperdiet erat luctus, porta sapien. Proin tempus, est at cursus consequat, nunc tellus efficitur augue, et mattis diam ex a neque. Pellentesque vestibulum at nulla nec commodo. In at feugiat turpis. Maecenas varius lectus id metus bibendum maximus.',
    title: 'Lorem ipsum'
  },
  {
    src: '/src/assets/picnic2.jpeg',
    description:
      'Sed eu ex lacus. In eleifend aliquet egestas. Nulla ut dapibus urna. Pellentesque turpis sem, ultricies et leo in, suscipit euismod enim. Nunc efficitur consequat lectus, id fermentum ex imperdiet a. Vestibulum nibh ex, molestie non efficitur quis, sagittis non mi. In sodales vulputate lectus eu ullamcorper. Donec nec tortor dui. Nulla id turpis neque. Pellentesque tempor mauris odio, ac luctus neque elementum sit amet.',
    title: 'Sed eu'
  },
  {
    src: '/src/assets/picnic3.jpeg',
    description:
      'Donec vel neque sed est feugiat finibus vel eu erat. Cras faucibus efficitur mauris sed ultricies. Donec a dui tellus. Aliquam in euismod lectus. Curabitur rutrum, lacus sit amet mollis fringilla, risus mi ullamcorper nisi, vitae consequat nisl diam nec metus. Etiam scelerisque arcu vulputate, varius eros non, volutpat diam. Nunc porta laoreet elit, eu vehicula lacus dapibus et. Morbi tristique eros orci, ac tincidunt quam vulputate sit amet. Phasellus in placerat ante. Cras nec massa nulla. Quisque non urna aliquam, congue dui sed, laoreet justo. Morbi fermentum venenatis purus, dignissim facilisis magna. Nullam id quam maximus, faucibus risus vitae, aliquet purus. Nullam neque sapien, ultrices eu diam non, egestas cursus augue. Maecenas molestie metus eget nisi cursus, quis iaculis sapien blandit. Proin sagittis purus in urna aliquam ornare.',
    title: 'Donec vel'
  },
  {
    src: '/src/assets/picnic1.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec rutrum urna. Duis lacus ante, hendrerit et lacus non, eleifend imperdiet ex. Aenean sollicitudin sed massa ornare pulvinar. Sed sagittis, augue at semper auctor, dolor erat lacinia tellus, nec facilisis leo sem sit amet mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus ornare mauris in dui auctor interdum. Donec ullamcorper, lorem vel scelerisque cursus, ligula ex eleifend tortor, et pulvinar diam erat ultrices eros. Quisque tincidunt consectetur nibh, interdum faucibus augue porttitor eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec tellus vulputate, imperdiet erat luctus, porta sapien. Proin tempus, est at cursus consequat, nunc tellus efficitur augue, et mattis diam ex a neque. Pellentesque vestibulum at nulla nec commodo. In at feugiat turpis. Maecenas varius lectus id metus bibendum maximus.',
    title: 'Lorem ipsum'
  },
  {
    src: '/src/assets/picnic2.jpeg',
    description:
      'Sed eu ex lacus. In eleifend aliquet egestas. Nulla ut dapibus urna. Pellentesque turpis sem, ultricies et leo in, suscipit euismod enim. Nunc efficitur consequat lectus, id fermentum ex imperdiet a. Vestibulum nibh ex, molestie non efficitur quis, sagittis non mi. In sodales vulputate lectus eu ullamcorper. Donec nec tortor dui. Nulla id turpis neque. Pellentesque tempor mauris odio, ac luctus neque elementum sit amet.',
    title: 'Sed eu'
  },
  {
    src: '/src/assets/picnic3.jpeg',
    description:
      'Donec vel neque sed est feugiat finibus vel eu erat. Cras faucibus efficitur mauris sed ultricies. Donec a dui tellus. Aliquam in euismod lectus. Curabitur rutrum, lacus sit amet mollis fringilla, risus mi ullamcorper nisi, vitae consequat nisl diam nec metus. Etiam scelerisque arcu vulputate, varius eros non, volutpat diam. Nunc porta laoreet elit, eu vehicula lacus dapibus et. Morbi tristique eros orci, ac tincidunt quam vulputate sit amet. Phasellus in placerat ante. Cras nec massa nulla. Quisque non urna aliquam, congue dui sed, laoreet justo. Morbi fermentum venenatis purus, dignissim facilisis magna. Nullam id quam maximus, faucibus risus vitae, aliquet purus. Nullam neque sapien, ultrices eu diam non, egestas cursus augue. Maecenas molestie metus eget nisi cursus, quis iaculis sapien blandit. Proin sagittis purus in urna aliquam ornare.',
    title: 'Donec vel'
  },
  {
    src: '/src/assets/picnic1.jpeg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec rutrum urna. Duis lacus ante, hendrerit et lacus non, eleifend imperdiet ex. Aenean sollicitudin sed massa ornare pulvinar. Sed sagittis, augue at semper auctor, dolor erat lacinia tellus, nec facilisis leo sem sit amet mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Phasellus ornare mauris in dui auctor interdum. Donec ullamcorper, lorem vel scelerisque cursus, ligula ex eleifend tortor, et pulvinar diam erat ultrices eros. Quisque tincidunt consectetur nibh, interdum faucibus augue porttitor eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc nec tellus vulputate, imperdiet erat luctus, porta sapien. Proin tempus, est at cursus consequat, nunc tellus efficitur augue, et mattis diam ex a neque. Pellentesque vestibulum at nulla nec commodo. In at feugiat turpis. Maecenas varius lectus id metus bibendum maximus.',
    title: 'Lorem ipsum'
  },
  {
    src: '/src/assets/picnic2.jpeg',
    description:
      'Sed eu ex lacus. In eleifend aliquet egestas. Nulla ut dapibus urna. Pellentesque turpis sem, ultricies et leo in, suscipit euismod enim. Nunc efficitur consequat lectus, id fermentum ex imperdiet a. Vestibulum nibh ex, molestie non efficitur quis, sagittis non mi. In sodales vulputate lectus eu ullamcorper. Donec nec tortor dui. Nulla id turpis neque. Pellentesque tempor mauris odio, ac luctus neque elementum sit amet.',
    title: 'Sed eu'
  },
  {
    src: '/src/assets/picnic3.jpeg',
    description:
      'Donec vel neque sed est feugiat finibus vel eu erat. Cras faucibus efficitur mauris sed ultricies. Donec a dui tellus. Aliquam in euismod lectus. Curabitur rutrum, lacus sit amet mollis fringilla, risus mi ullamcorper nisi, vitae consequat nisl diam nec metus. Etiam scelerisque arcu vulputate, varius eros non, volutpat diam. Nunc porta laoreet elit, eu vehicula lacus dapibus et. Morbi tristique eros orci, ac tincidunt quam vulputate sit amet. Phasellus in placerat ante. Cras nec massa nulla. Quisque non urna aliquam, congue dui sed, laoreet justo. Morbi fermentum venenatis purus, dignissim facilisis magna. Nullam id quam maximus, faucibus risus vitae, aliquet purus. Nullam neque sapien, ultrices eu diam non, egestas cursus augue. Maecenas molestie metus eget nisi cursus, quis iaculis sapien blandit. Proin sagittis purus in urna aliquam ornare.',
    title: 'Donec vel'
  }
]
</script>

<template>
  <v-row class="fill-height">
    <v-col class="d-flex flex-column fill-height" cols="8" style="margin: 0 auto 1rem auto">
      <v-card :variant="'outlined'" elevation="5" style="margin-bottom: 2rem">
        <HomeCarousel />
      </v-card>
      <v-card :variant="'outlined'" elevation="5">
        <CalendarComponent style="margin: 5px" />
      </v-card>
    </v-col>

    <v-col cols="4" class="d-flex flex-column fill-height">
      <v-card class="mx-auto d-flex flex-column fill-height" :variant="'outlined'" elevation="5">
        <v-card-title>More stories</v-card-title>
        <v-divider></v-divider>
          <v-virtual-scroll class="flex-grow-1" style="height:500px; overflow: auto;" :items="items" :item-height="174">
            <template v-slot:default="{ item }">
              <v-list-item>
                <div class="text-flex">
                  <div style="display: flex; flex-wrap: wrap">
                    <span>
                      <v-list-item-title> {{ item.title }} </v-list-item-title>
                    </span>
                    <p style="max-height: 100px">&emsp;{{ item.description }}</p>
                  </div>

                  <img :src="item.src" class="container-item-img" />
                </div>
                <v-divider style="margin-top: 3px"></v-divider>
              </v-list-item>
            </template>
          </v-virtual-scroll>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

div.v-card-title{
  font-weight: bold !important;
  font-size: 24px;
}


.v-list-item-title{
  font-weight: bold;
}

p {
  -webkit-line-clamp: 4;
  line-clamp: 4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.container-item-img {
  width: 50%;
  border-radius: 5%;
}

.text-flex {
  display: flex;
  padding:1rem
}
</style>
