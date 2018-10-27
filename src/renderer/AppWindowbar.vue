<template>
    <v-system-bar
        window
        color="primary darken-1"
        class="px-0"
        dark
        app
    >
        <v-spacer class="titlebar fill-height"></v-spacer>

        <div
            class="titlebar-btn-other fill-height"
            @click="onMinimize"
        >
            <v-icon>mdi-minus</v-icon>
        </div>

        <div
            class="titlebar-btn-other fill-height"
            @click="onMaximize"
        >
            <v-icon>mdi-checkbox-blank-outline</v-icon>
        </div>

        <div
            class="titlebar-btn-close fill-height"
            @click="onClose"
        >
            <v-icon>mdi-close</v-icon>
        </div>
    </v-system-bar>
</template>

<script>
  const { remote } = require('electron')
  let win = remote.getCurrentWindow()

  export default {
    name: 'app-windowbar',
    methods: {
      onMinimize () {
        // Minimize Window to tray
        win.minimize()
      },
      onMaximize () {
        // Maximize/Minimize Window
        if (!win.isMaximized()) {
          win.maximize()
        } else {
          win.unmaximize()
        }
      },
      onClose () {
        // Close Window
        win.close()
      }
    }
  }
</script>

<style
    scoped
    lang="stylus"
>
    .titlebar
        -webkit-app-region drag

    .titlebar-btn
        -webkit-app-region no-drag
        max-width 20px
        &-close:hover
            background-color red
        &-other:hover
            background-color #0d47a1

    .titlebar-icon
        display block
        margin-left auto
        margin-right auto
        top 50%
        bottom 50%
        left 50%
        right 50%

</style>
