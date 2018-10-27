<template>
    <v-layout>
        <v-btn @click="dialog = true">{{ clicked }}</v-btn>
        <v-dialog
                v-model="dialog"
                max-width="500"
        >
            <v-card>
                <v-card-title>Bearbeiten</v-card-title>
                <v-card-text>
                    In was wollen Sie "{{ clicked }}" ändern?
                    <v-text-field
                        v-model="textfield"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        flat
                        @click="dialog = false"
                    >schließen</v-btn>
                    <v-btn
                            flat
                            @click="vertifydialog = true"
                    >übernehmen</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="vertifydialog"
                max-width="500"
        >
            <v-card>
                <v-card-title>Es gibt kein Strg + Z ;-)</v-card-title>
                <v-card-text>
                    Wollen Sie wirklich "{{ clicked }}" in "{{ textfield }}" ändern?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            flat
                            @click="dialog = false"
                    >abbrechen</v-btn>
                    <v-btn
                            flat
                            @click="commit()"
                    >JA!</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
                v-model="error"
                color="error"
                :timeout="timeout"
        >
            {{ Errormessage }}
            <v-btn
                    dark
                    flat
                    @click="error = false"
            >
                schliessen
            </v-btn>
        </v-snackbar>
    </v-layout>
</template>
<script>
    export default {
      data () {
        return {
          dialog: false,
          vertifydialog: false,
          clicked: 'Käsebrot',
          textfield: '',
          error: false,
          Errormessage: 'Das Textfenster darf nicht leer sein!'
        }
      },
      methods: {
        commit () {
          if (this.textfield === '') {
            this.error = true
            this.vertifydialog = false
          } else {
            this.clicked = this.textfield
            this.textfield = ''
            this.dialog = false
            this.vertifydialog = false
          }
        }
      }
    }
/* var hex = require('hexer')
    var hexer = hex.Transform()
    hexer.pipe(process.stdout)

    process.stdin.on('data', function onData (chunk) {
      var i = findBoundary(chunk)
      while (i > 0) {
        hexer.write(chunk.slice(0, i))
        hexer.reset()
        chunk = chunk.slice(i)
        i = findBoundary(chunk)
      }
      if (chunk.length) {
        hexer.write(chunk)
      }
    }) */
</script>
