<template>
    <v-system-bar
        window
        color="primary darken-1"
        class="px-0"
        dark
        app
    >
        <v-spacer class="titlebar fill-height"></v-spacer>

        <v-layout row class="ma-0 fill-height justify-end buttons">
            <v-layout
                column
                class="titlebar-btn-other justify-center"
                @click="onMinimize"
            >
                <v-icon class="mr-0">mdi-window-minimize</v-icon>
            </v-layout>

            <v-layout
                column
                class="titlebar-btn-other justify-center"
                @click="onMaximize"
            >
                <!--<v-icon class="mr-0">mdi-checkbox-blank-outline</v-icon>-->
                <v-icon class="mr-0" v-text="maxIcon"></v-icon>
            </v-layout>

            <v-layout
                column
                class="titlebar-btn-close justify-center"
                @click="onClose"
            >
                <v-icon class="mr-0">mdi-window-close</v-icon>
            </v-layout>
        </v-layout>
    </v-system-bar>
</template>

<script>
  const { remote } = require('electron')
  let win = remote.getCurrentWindow()

  export default {
    name: 'app-windowbar',
    data: () => ({
      maxIcon: 'mdi-window-maximize'
    }),
    methods: {
      onMinimize () {
        // Minimize Window to tray
        win.minimize()
      },
      onMaximize () {
        // Maximize/Unmaximize Window
        if (!win.isMaximized()) {
          this.maxIcon = 'mdi-window-restore'
          win.maximize()
        } else {
          this.maxIcon = 'mdi-window-maximize'
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
        &-close:hover
            background-color red
        &-other:hover
            background-color #62efff

    .buttons
        max-width 150px

    .titlebar-icon
        display block
        margin-left auto
        margin-right auto
        top 50%
        bottom 50%
        left 50%
        right 50%

</style>
