<template>
    <v-toolbar
        dark
        color="primary"
        fixed
        app
    >
        <v-toolbar-title class="non-selectable" v-text="title"></v-toolbar-title>
    </v-toolbar>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'app-toolbar',
    data: () => ({
      title: 'Hex Editor',
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
