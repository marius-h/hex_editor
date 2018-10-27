<template>
    <v-toolbar
        dark
        color="primary"
        fixed
        app
    >
        <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>

        <v-toolbar-title class="non-selectable" v-text="title"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>settings</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>notifications</v-icon>
        </v-btn>

        <v-btn icon>
            <v-avatar size="38px">
                <img src="https://randomuser.me/api/portraits/men/13.jpg"/>
            </v-avatar>
        </v-btn>
    </v-toolbar>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'app-toolbar',
    data: () => ({
      title: 'Übersicht',
      drawer: true
    }),
    methods: {
      ...mapMutations('app', ['toggleDrawer'])
    }
  }
</script>

<style
    lang="stylus"
    scoped
>

</style>