<template>
    <v-toolbar
        color="primary"
        fixed
        app
    >
        <v-toolbar-side-icon>
            <v-icon>mdi-hexagon-slice-6</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title class="non-selectable toolbar-title">
            H<b>exe</b>r
        </v-toolbar-title>
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
    .toolbar-title
        font-weight bold


</style>
