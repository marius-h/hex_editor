<template>
    <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
    >
        <v-layout wrap>
            <v-flex xs12>
                <v-progress-linear
                        :active="isUpdating"
                        class="ma-0"
                        color="green lighten-3"
                        height="4"
                        indeterminate
                ></v-progress-linear>
            </v-flex>
            <v-layout
                    align-start
                    column
                    justify-end
                    pa-3
            >
                <h3 class="headline">{{ name }}</h3>
                <span class="grey--text text--lighten-1">{{ title }}</span>
            </v-layout>
        </v-layout>
    </v-img>
</template>

<script>
    export default {
      name: 'inputheader',
      data () {
        return {
          title: 'jaaa',
          name: 'neinnn'
        }
      }
    }
</script>