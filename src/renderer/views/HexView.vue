<template>
    <v-layout column>
        <v-btn class="secondary jbtn-file" fixed>
            Datei auswählen
            <input
                type="file"
                @change="fileSelected"
            />
        </v-btn>
        <v-textarea
            box
            :label="fileName"
            auto-grow
            :value="hexText"
            class="mt-4 hex-content"
            :disabled="nonEditable"
        ></v-textarea>
        <!--<v-container>
            <p
                v-text="hexText"
                class="hex-content"
            >
            </p>
        </v-container>-->
        <!--<v-btn @click="dialog = true">{{ clicked }}</v-btn>-->
        <!--<v-dialog
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
                    >schließen
                    </v-btn>
                    <v-btn
                        flat
                        @click="vertifydialog = true"
                    >übernehmen
                    </v-btn>
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
                    >abbrechen
                    </v-btn>
                    <v-btn
                        flat
                        @click="commit()"
                    >JA!
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>-->
        <!--<v-snackbar
            v-model="error"
            color="error"
        >
            {{ Errormessage }}
            <v-btn
                dark
                flat
                @click="error = false"
            >
                schliessen
            </v-btn>
        </v-snackbar>-->
    </v-layout>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      vertifydialog: false,
      clicked: 'Käsebrot',
      textfield: '',
      error: false,
      Errormessage: 'Das Textfenster darf nicht leer sein!',
      hexText: '',
      fileName: 'Bitte wählen Sie zuerst eine Datei aus.',
      nonEditable: true
    }),
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
      },
      fileSelected (e) {
        let file = e.target.files[0]
        if (!file) {
          return
        }

        const fs = require('fs')
        const util = require('util')
        const hex = require('hexer')

        const readFile = util.promisify(fs.readFile)

        this.fileName = file.name

        async function getStuff () {
          return readFile(file.path)
        }

        getStuff().then(data => {
          const options = {
            group: 1,
            offsetWidth: 8
          }
          const inHex = hex(data, options)
          console.log(inHex)
          this.hexText = inHex
          // this.nonEditable = false
        })
      }
    }
  }
</script>

<style
    lang="stylus"
    scoped
>
    .jbtn-file
        cursor pointer
        position relative
        overflow hidden

    .jbtn-file input[type=file]
        position absolute
        top 0
        right 0
        min-width 100%
        min-height 100%
        text-align right
        //filter alpha(opacity = 0)
        opacity 0
        outline none
        cursor inherit
        display block

    .hex-content
        white-space pre-wrap
        font-family "DejaVu Sans Mono"

</style>
