<template>
    <div id="app">
        <v-app class="app-mount">
            <core-windowbar></core-windowbar>

            <core-toolbar></core-toolbar>

            <v-content id="content">
                <v-container fluid>
                    <v-slide-y-transition mode="out-in">
                        <router-view></router-view>
                    </v-slide-y-transition>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
  import CoreToolbar from './components/core/Toolbar'
  import CoreWindowbar from './AppWindowbar'

  export default {
    name: 'hex-editor',
    components: { CoreWindowbar, CoreToolbar },
    data: () => ({})
  }
</script>

<style lang="stylus">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700')
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Material+Icons')

    ::-webkit-scrollbar
        display none

    #content
        max-height 100vh
        overflow-y scroll

    #content::-webkit-scrollbar
        display block


    .app-mount
        -webkit-user-select none
        -webkit-box-direction normal
        -webkit-box-orient vertical
        display flex
        flex-direction column
        overflow hidden
        width 100vw
        height 100vh

    body
        margin 0
        padding 0
        overflow hidden
        user-select none

    .toolbar
        flex-shrink 0

    .content
        flex-grow 1
        overflow-x auto

    /* Global CSS */
    .non-selectable
        -webkit-user-drag none

    -webkit-scrollbar-track
        width 0
        background-color rgba(0, 0, 0, 0)

    -webkit-scrollbar
        width 8px
        background-color rgba(0, 0, 0, 0)

    -webkit-scrollbar-thumb
        background-color rgba(63, 63, 63, 0.4)

    /*
    Fonts
     */
    /*.headline, h1
        font-family "Montserrat SemiBold"
        font-size 32px
        line-height 39px
        opacity .87

    .title, h2
        font-family "Montserrat SemiBold"
        font-size 20px
        line-height 24px
        opacity .87

    .subheader, h3
        font-family "Montserrat Medium"
        font-size 16px
        line-height 24px
        opacity .54

    .body2, h4
        font-family Montserrat
        font-size 18px
        line-height 33px
        opacity .54

    .body1
        font-family Montserrat
        font-size 16px
        line-height 27px
        opacity .54

    html *
        font-family Montserrat*/
</style>
