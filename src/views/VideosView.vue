<template>
    <v-card style="margin: 1rem;"
    v-for="(video, index) in videos" 
    :key="index" 
    :title="video" 
    :to="`/videos/${index+1}`"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
    </v-card>
</template>

<script>
    export default {

        data () {
            return {
                videos : ["Funny dog", "Serious Monkey", "Piano playing Elephant", "GOAL!"]
            }
        }
    }
</script>