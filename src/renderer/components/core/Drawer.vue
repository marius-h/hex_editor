<template>
    <!--<v-navigation-drawer
        :mini-variant="drawer"
        v-model="inputValue"
        :clipped="$vuetify.breakpoint.lgAndUp"
        fixed
        app
    >-->
    <v-navigation-drawer
        v-model="inputValue"
        fixed
        app
    >
        <v-toolbar
            dark
            color="primary"
            class="elevation-1"
        >
            <v-toolbar-title>Schulverwaltung</v-toolbar-title>
        </v-toolbar>

        <!-- Modules -->
        <v-list expand>
            <v-divider></v-divider>
            <v-subheader>Module</v-subheader>
            <template v-for="item in items">
                <v-list-group
                    v-if="item.items"
                    :group="item.group"
                    :prepend-icon="item.icon"
                    no-action
                >
                    <v-list-tile
                        slot="activator"
                        ripple
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile
                        :href="`/${item.name}`"
                        :to="`/${item.name}`"
                        v-for="(subitem, i) in item.items"
                        :key="i"
                    >
                        <v-list-tile-content>
                            <router-link :to="`/`">
                                <v-list-tile-title>{{ subitem.title }}</v-list-tile-title>
                            </router-link>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
            </template>
        </v-list>
        <!--v-divider inset></v-divider>
        <v-list subheader>
            <v-subheader inset>Module</v-subheader>
            <v-list-tile
                router
                :to="item.to"
                :key="i"
                v-for="(item, i) in items.modules"
                exact
            >
                <v-list-tile-action>
                    <v-icon
                        v-html="item.icon"
                        :large="drawer"
                    ></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list-->
    </v-navigation-drawer>
</template>

<script>
  import DrawerItems from '../../data/drawer'
  import { mapMutations } from 'vuex'

  export default {
    name: 'core-drawer',
    data: () => ({
      drawer: false,
      items: DrawerItems
    }),
    computed: {
      inputValue: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },
    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
    }
  }
</script>

<style
    lang="stylus"
    scoped
>
    .drawer-header
        background-image url('/static/trianglify.png')
        background-size cover
        background-repeat no-repeat
        -webkit-app-region: drag;

    .drawer-title
        background-image url('/static/Title.svg')

</style>