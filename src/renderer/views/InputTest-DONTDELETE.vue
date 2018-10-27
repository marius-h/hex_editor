<template>
    <v-card
            dark
            color="primary"
    >
        <v-img
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
        >
            <v-layout wrap>
                <v-flex xs12>
                    <v-progress-linear
                            :active="isUpdating"
                            class="ma-0"
                            color="accent"
                            height="4"
                            indeterminate
                    ></v-progress-linear>
                </v-flex>
                <v-flex
                        text-xs-right
                        xs12
                >
                    <v-menu
                            bottom
                            left
                            transition="slide-y-transition"
                    >
                        <v-btn
                                slot="activator"
                                icon
                        >
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-list>
                            <v-list-tile @click="isUpdating = true">
                                <v-list-tile-action>
                                    <v-icon>logout</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>Exit</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
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
        <v-form>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12 md6>
                        <v-text-field
                                color="accent"
                                label="Aktenzeichen"
                        ></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-autocomplete
                                :items="Rechtsgebiete"
                                label="Rechtsgebiet"
                                color="accent"
                        ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-autocomplete
                                :items="Entscheidungsart"
                                label="Entscheidungsart"
                                color="accent"
                        ></v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-autocomplete
                                :items="Gerichte"
                                color="accent"
                                label="Gericht"
                                prepend-icon="account_balance"
                                v-model="GerichtAuto"
                        >
                            <template
                                    slot="selection"
                                    slot-scope="data"
                            >
                <span
                        :selected="data.selected"
                        close
                        @input="remove(data.item)"
                >
                  {{ data.item.name }}
                </span>
                            </template>

                            <template
                                    slot="item"
                                    slot-scope="data"
                            >
                                <template>
                                    <v-list-tile-content>
                                        <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="data.item.location"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </template>
                            </template>
                        </v-autocomplete>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-menu
                                ref="menu"
                                :close-on-content-click="false"
                                v-model="menu"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    v-model="date"
                                    label="Jahr"
                                    prepend-icon="event"
                                    readonly
                                    color="accent"
                            ></v-text-field>
                            <v-date-picker
                                    ref="picker"
                                    v-model="date"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1950-01-01"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex>
                        <v-autocomplete
                                :items="Ergebnise"
                                color="accent"
                                label="Ergebnis"
                                v-model="Ergebnis"
                        >
                            <template
                                    slot="selection"
                                    slot-scope="data"
                            >
                <span
                        :selected="data.selected"
                        close
                        @input="remove(data.item)"
                >
                  {{ data.item.result }}
                </span>
                            </template>
                            <template
                                    slot="item"
                                    slot-scope="data"
                            >
                                <template>
                                    <v-list-tile-action
                                            :color="data.item.color"
                                    >
                                        <v-icon>{{ data.item.icon }}</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ data.item.result }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </template>
                            </template>
                        </v-autocomplete>
                    </v-flex>
                    <v-flex>
                        <v-textarea>

                        </v-textarea>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    :loading="isUpdating"
                    color="accent"
                    depressed
                    @click="isUpdating = true"
            >
                Push Data
                <v-icon right>send</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
      data () {
        return {
          isUpdating: false,
          name: 'JANA ',
          title: 'Datenbank Interface',
          date: null,
          menu: false,
          Gerichte: [
            {
              name: 'AG Haßfurt',
              location: '97437 Haßfurt',
              2009: 'Manuel Neuer',
              2010: 'Thomas Müller',
              2011: 'Oliver Kahn'
            },
            {
              name: 'AG Lündighausen',
              location: '59348 Lündighausen',
              2009: 'Laurin Dörre',
              2010: 'Tara Walters',
              2011: 'Jessica Stohler'
            }
          ],
          Entscheidungsart: ['Urteil', 'Beschluss'],
          Ergebnise: [
            {
              result: 'verurteilt',
              icon: 'gavel',
              color: 'error'
            },
            {
              result: 'Freispruch',
              icon: 'done',
              color: 'success'
            },
            {
              result: 'eingestellt',
              icon: 'cancel',
              color: 'warning'
            }
          ],
          Rechtsgebiete: ['Verkehrsrecht', 'Arbeitsrecht', 'Strafrecht'],
          Thema: ['Geschwindigkeitsüberschreitung im Straßenverkehr', 'Außerordenlich Kündigung', 'Betrug']
        }
      },
      watch: {
        menu (val) {
          val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
        }
      },
      methods: {
        save (date) {
          this.$refs.menu.save(date)
        }
      }
    }
</script>
